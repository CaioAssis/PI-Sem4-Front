import { Input } from "@chakra-ui/react"
import ModuloList from "../modulo-list"
import { useEffect, useState } from "react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"
import api from "../../../../helpers/axios"

export function UpdateModulo() {

  const [modulo, setModulo] = useState<ModuloDescricao[]>([])
  const [filtro, setFiltro] = useState<ModuloDescricao[]>([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const filtrados = modulo.filter((item) =>
      item.titulo.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltro(filtrados);
  }, [inputValue])

  function atualizar() {
    const fetchModulo = async () => {
      try {
        const response = await api.get('/modulo/get')
        setModulo(response.data)
        setFiltro(response.data)
      }
      catch (e) {
        console.log("Erro: " + e)
      }
    }

    fetchModulo()
  }
  useEffect(() => {
    atualizar()
  }, []);

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
        <ModuloList key={modulo.id} modulo={modulo} reload={atualizar}/>
      ))
      }
    </>
  )
}
export default UpdateModulo