import { Button, Divider, Grid, GridItem } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { useState } from 'react';
import api from '../../../../helpers/axios';

interface Props {
  onClose: () => void
}

export function CreateClient({ onClose }: Props) {
  function addClient() {
    if (nome != '' && cpf != '' && contato != '') {
      setIsLoading(true)
      const newClient = {
        nome: nome,
        cpf: cpf,
        contato: contato
      }
      api.post(`/cliente/save`, newClient)
      .then(()=>onClose())
      .catch((e)=>console.log("Erro: " + e))
      
    }
    else alert('Os campos precisam estar preenchidos!')
  }

  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [contato, setContato] = useState('')

  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>

        <GridItem colSpan={3}>
          <ModalInput
            title='Nome'
            placeholder='Nome do Cliente'
            onChange={(evento) => setNome(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={2}>
          <ModalInput
            title='CPF'
            placeholder='Número do CPF do Cliente'
            onChange={(evento) => setCpf(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <ModalInput
            title='E-mail'
            placeholder='E-mail do Cliente'
            onChange={(evento) => setContato(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3} justifySelf='end'>
          <Button isLoading={isLoading} onClick={addClient}>Criar Cliente</Button>
        </GridItem>

        <GridItem colSpan={2} justifySelf='end'>
          <Button onClick={onClose}>Cancelar</Button>
        </GridItem>

      </Grid>
    </>
  )
}
export default CreateClient