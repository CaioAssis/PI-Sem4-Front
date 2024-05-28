import { Input } from "@chakra-ui/react";
import ClientList from "../client-list";
import { useEffect, useState } from "react";
import { Cliente } from "../../../interfaces/cliente";
import api from "../../../../helpers/axios";

export function UpdateClient() {

  const [client, setClient] = useState<Cliente[]>([]);
  const [filtro, setFiltro] = useState<Cliente[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Função para buscar clientes da API
    const fetchClients = async () => {
      try {
        const response = await api.get('/client/get'); // Substitua pelo endpoint real da sua API
        setClient(response.data);
        setFiltro(response.data); // Inicialmente, mostrar todos os clientes
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const filtrados = client.filter((item) =>
      item.nome.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltro(filtrados);
  }, [inputValue, client]);

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
      ))}
    </>
  )
}
export default UpdateClient;
