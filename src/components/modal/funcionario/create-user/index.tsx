import { Button, Divider, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import CreateModal from '../../create-modal';
import { useState } from 'react';
import api from '../../../../helpers/axios';

interface Props{
  onClose: () => void
}

export function CreateUser( { onClose }: Props) {
  function addUser(){
    if(nome != '' && matricula != '' && contato != '' && usuario != '' && senha != '' && role != ''){
      const newUser = {
        nome: nome,
        matricula: matricula,
        contato: contato,
        usuario: usuario,
        senha: senha,
        role: role
      }
      //api.post('/', newUser) ///////////////ARRUMAR
      //.then(()=> {
      onClose()

      //})
      
    }
    else alert('Os campos precisam estar preenchidos!')
  }

  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [contato, setContato] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [role, setRole] = useState('')

  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>

        <GridItem colSpan={3}>
          <ModalInput 
          title='Nome' 
          placeholder='Nome do Funcionário'
          onChange={(evento) => setNome(evento.target.value)}/>
        </GridItem>

        <GridItem colSpan={2}>
          <ModalInput 
          title='Matrícula' 
          placeholder='Número de identificação do Funcionário'
          onChange={(evento) => setMatricula(evento.target.value)}/>
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <ModalInput 
          title='E-mail' 
          placeholder='E-mail do Funcionário'
          onChange={(evento) => setContato(evento.target.value)}/>
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3}>
          <ModalInput 
          title='Usuário' 
          placeholder='Nome de Usuário do Funcionário'
          onChange={(evento) => setUsuario(evento.target.value)}/>

          <ModalInput 
          title='Senha' 
          placeholder='Senha do Funcionário'
          onChange={(evento) => setSenha(evento.target.value)}/>
        </GridItem>

        <GridItem colSpan={2}>
          <Text fontSize='20'>Nível</Text>
          <Select 
          placeholder='---Nível de Permissão do Funcionário---'
          onChange={(evento) => setRole(evento.target.value)} >
            <option value='ger'>Gerencial</option>
            <option value='fun'>Funcionário Deere</option>
            <option value='ter'>Funcionário Concessionária</option>
          </Select>
        </GridItem>

        <GridItem colSpan={3} justifySelf='end'>
          <Button onClick={addUser}>Criar Usuário</Button>
        </GridItem>

        <GridItem colSpan={2} justifySelf='end'>
          <Button onClick={onClose}>Cancelar</Button>
        </GridItem>

      </Grid>
    </>
  )
}
export default CreateUser