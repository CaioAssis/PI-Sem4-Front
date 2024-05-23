import { Input } from "@chakra-ui/react"
import ClientList from "../client-list"
import { useEffect, useState } from "react"
import { Cliente } from "../../../interfaces/cliente"

export function UpdateClient() {

  const [client, setClient] = useState<Cliente[]>([
    { id: 1, nome: 'jusé', cpf: '11111', contato: 'teste1@teste' },
    { id: 2, nome: 'juão', cpf: '22222', contato: 'teste2@gmail' },
    { id: 3, nome: 'judeu', cpf: '33333', contato: 'teste3@hotmail' },
    { id: 4, nome: 'lébisca', cpf: '44444', contato: 'teste4@yahoo' },
    { id: 5, nome: 'jailson mendes', cpf: '55555', contato: 'teste5@uol' }
  ])

  const [filtro, setFiltro] = useState<Cliente[]>([])

  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    const filtrados = client.filter((item) =>
      item.nome.toLowerCase().includes(inputValue.toLowerCase())
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

      {filtro.map((client) => (
        <ClientList key={client.id} client={client} />
      ))
      }
    </>
  )
}
export default UpdateClient