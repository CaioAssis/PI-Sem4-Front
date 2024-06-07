import { Input } from "@chakra-ui/react"
import ModuloList from "../modulo-list"
import { useEffect, useState } from "react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"
import MockModulos from "../../../mockup/mock-modulo"

export function UpdateModulo() {

  const [modulo] = useState<ModuloDescricao[]>(MockModulos)

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