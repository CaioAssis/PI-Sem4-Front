import { Input } from "@chakra-ui/react"
import UserList from "../user-list"
import { useEffect, useState } from "react"
import { Funcionario } from "../../../interfaces/funcionario"
import api from "../../../../helpers/axios"

export function UpdateUser() {

  const [user, setUser] = useState<Funcionario[]>([
  ])
  const [filtro, setFiltro] = useState<Funcionario[]>([])

  const [inputValue, setInputValue] = useState('')
  useEffect(()=>{
    const fetchUsers = async () => {
      try{
    const filtrados = await api.get('/func/get');
    setUser(filtrados.data) 
    setFiltro(filtrados.data);
      }
      catch(error)
      {
        console.error("Erro ao buscar usuário", error);
      }
    };

    fetchUsers();
  }, [])
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
      placeholder='Digite o nome do usuário' />

      {filtro.map((user) => (
        <UserList key={user.id} user={user}/>
        ))
      }
    </>
  )
}
export default UpdateUser