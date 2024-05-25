import { Input } from "@chakra-ui/react"
import MaqList from "../maq-list"
import { useEffect, useState } from "react"
import { Maquina } from "../../../interfaces/maquina"

export function UpdateMaq() {

  const [maquina, setMaq] = useState<Maquina[]>([
    { id: 1, descricao: 'módulo 1', vistorias: [] },
    { id: 2, descricao: 'módulo 2', vistorias: [] },
    { id: 3, descricao: 'módulo 3', vistorias: [] },
    { id: 4, descricao: 'módulo 4', vistorias: [] },
    { id: 5, descricao: 'módulo 5', vistorias: [] }
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
        placeholder='Digite o nome do cliente' />

      {filtro.map((maq) => (
        <MaqList key={maq.id} maq={maq} />
      ))
      }
    </>
  )
}
export default UpdateMaq