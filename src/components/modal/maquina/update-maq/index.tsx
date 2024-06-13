import { Input } from "@chakra-ui/react"
import MaqList from "../maq-list"
import { useEffect, useState } from "react"
import { Maquina } from "../../../interfaces/maquina"
import api from "../../../../helpers/axios"

export function UpdateMaq() {

  const [maquina, setMaquina] = useState<Maquina[]>([]) 
  const [filtro, setFiltro] = useState<Maquina[]>([])

  const [inputValue, setInputValue] = useState('')

  function atualizar(){
    const fetchUsers = async () => {
      try{
    const filtrados = await api.get('/maquina/get')
    console.log(filtrados)
    setMaquina(filtrados.data)
    setFiltro(filtrados.data)
      }
      catch(error)
      {
        console.error("Erro ao buscar usuário", error)
      }
    }

    fetchUsers();
  }

  useEffect(()=>{
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
        <MaqList key={maq.id} maq={maq} />
      ))
      }
    </>
  )
}
export default UpdateMaq