import { Input } from "@chakra-ui/react"
import UserList from "../user-list"
import { useEffect, useState } from "react"
import { Funcionario } from "../../../interfaces/funcionario"

export function UpdateUser() {
  const [user, setUser] = useState<Funcionario[]>([
    {id: 1, nome: 'caio', matricula: '123456', contato: 'teste@teste', usuario: 'teste', senha: '123', role: 'ger'},
    {id: 2, nome: 'carlos', matricula: '111111', contato: 'teste@gmail', usuario: 'testancio', senha: '123', role: 'fun'},
    {id: 3, nome: 'pedro', matricula: '142355', contato: 'teste@hotmail', usuario: 'testerson', senha: '123', role: 'fun'},
    {id: 4, nome: 'carol', matricula: '972232', contato: 'teste@yahoo', usuario: 'testona', senha: '123', role: 'ter'},
    {id: 5, nome: 'jessica', matricula: '878884', contato: 'teste@uol', usuario: 'testavio', senha: '123', role: 'ter'}
  ])

  const [filtro, setFiltro] = useState<Funcionario[]>([])

  const [inputValue, setInputValue] = useState('')
  useEffect(()=>{
    const filtrados = user.filter((item) =>
      item.nome.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltro(filtrados);
  }, [inputValue])
  return (
    <>
      <Input 
      type='text'
      value={inputValue}
      w='80%'
      onChange={
        (event) => {
        setInputValue(event.target.value);
      }}
      placeholder='Digite o número do usuário' />

      {filtro.map((user) => (
        <UserList key={user.id} user={user}/>
        ))
      }
    </>
  )
}
export default UpdateUser