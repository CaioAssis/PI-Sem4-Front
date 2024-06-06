import { Input } from "@chakra-ui/react"
import MaqList from "../maq-list"
import { useEffect, useState } from "react"
import { Maquina } from "../../../interfaces/maquina"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"

export function UpdateMaq() {

  const [maquina, setMaq] = useState<Maquina[]>([
    { id: 1, descricao: 'chassi 1', modulos: [1, 2, 3], vistorias: [] },
    { id: 2, descricao: 'chassi 2', modulos: [5, 3], vistorias: [] },
    { id: 3, descricao: 'chassi 3', modulos: [5, 2], vistorias: [] },
    { id: 4, descricao: 'chassi 4', modulos: [4, 1], vistorias: [] },
    { id: 5, descricao: 'chassi 5', modulos: [3, 4], vistorias: [] }
  ])
  const [filtro, setFiltro] = useState<Maquina[]>([])

  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    const filtrados = maquina.filter((item) =>
      item.descricao.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltro(filtrados);
  }, [inputValue])
  return (
    <>
      <Input
        type='text'
        value={inputValue}
        bg='white'
        w='80%'
        onChange={
          (event) => {
            setInputValue(event.target.value);
          }}
        placeholder='Digite o número do chassi' />

      {filtro.map((maq) => (
        <MaqList key={maq.id} maq={maq} />
      ))
      }
    </>
  )
}
export default UpdateMaq