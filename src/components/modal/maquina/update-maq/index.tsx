import { Input } from "@chakra-ui/react"
import MaqList from "../maq-list"
import { useEffect, useState } from "react"
import { Maquina, maquinaGet } from "../../../interfaces/maquina"
import api from "../../../../helpers/axios"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"


export function UpdateMaq() {

  const [maquina, setMaquina] = useState<Maquina[]>([])
  const [filtro, setFiltro] = useState<Maquina[]>([])
  const [inputValue, setInputValue] = useState('')
  const [getModulos, setGetModulos] = useState<ModuloDescricao[]>([])

  function atualizar() {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/maquina/get')
        const maqGet: maquinaGet[] = response.data
        setMaquina(maqGet.map(item => ({
          id: item.id,
          descricao: item.descricao,
          vistorias: [],
          modulos: item.modulosDescricao.map(modulo => modulo.id)
        })))
        setFiltro((maqGet.map(item => ({
          id: item.id,
          descricao: item.descricao,
          vistorias: [],
          modulos: item.modulosDescricao.map(modulo => modulo.id)
        }))))
      }
      catch (error) {
        console.error("Erro ao buscar usuário", error)
      }
    }

    const fetchMod = async () => {
      try {
        const filtrados = await api.get('/modulo/get')
        setGetModulos(filtrados.data)
      }
      catch (error) {
        console.error("Erro ao buscar usuário", error)
      }
    }
    fetchUsers()
    fetchMod()
  }

  useEffect(() => {
    atualizar()
  }, [])

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
        <MaqList key={maq.id} maq={maq} reload={atualizar} modulos={getModulos} />
      ))
      }
    </>
  )
}
export default UpdateMaq