import { Input } from "@chakra-ui/react"
import ModuloList from "../modulo-list"
import { useEffect, useState } from "react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"
import ImageExample from "../../../pdf/img-example"

export function UpdateModulo() {

  const [modulo, setModulo] = useState<ModuloDescricao[]>([
    { id: 1, titulo: 'módulo 1', descricao: 'módulo des 1', imagem: ImageExample },
    { id: 2, titulo: 'módulo 2', descricao: 'módulo des 2', imagem: '' },
    { id: 3, titulo: 'módulo 3', descricao: 'módulo des 3', imagem: '' },
    { id: 4, titulo: 'módulo 4', descricao: 'módulo des 4', imagem: '' },
    { id: 5, titulo: 'módulo 5', descricao: 'módulo des 5', imagem: '' }
  ])

  const [filtro, setFiltro] = useState<ModuloDescricao[]>([])

  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    const filtrados = modulo.filter((item) =>
      item.titulo.toLowerCase().includes(inputValue.toLowerCase())
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
        placeholder='Digite o nome do módulo' />

      {filtro.map((modulo) => (
        <ModuloList key={modulo.id} modulo={modulo} />
      ))
      }
    </>
  )
}
export default UpdateModulo