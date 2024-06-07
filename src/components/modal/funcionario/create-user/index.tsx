import { Button, Divider, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { useState } from 'react';
import api from '../../../../helpers/axios';

interface Props {
  onClose: () => void
}

export function CreateUser({ onClose }: Props) {
  function addUser() {
    if (userData.nome != '' && userData.matricula != '' && userData.contato != '' && userData.usuario != '' && userData.senha != '' && userData.role != '') {
      const newUser = {
        nome: userData.nome,
        matricula: userData.matricula,
        contato: userData.contato,
        usuario: userData.usuario,
        senha: userData.senha,
        role: userData.role
      }
       api.post('/usuario/save', newUser)
      .then(()=> {
      onClose() 
    }).catch(()=>{alert("Error")})

    }
    else alert('Os campos precisam estar preenchidos!')
  }
  const [userData, setUserData] = useState({
    nome: '',
    matricula: '',
    contato: '',
    usuario: '',
    senha: '',
    role: ''
  })

  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>

        <GridItem colSpan={3}>
          <ModalInput
            title='Nome'
            placeholder='Nome do Funcionário'
            onChange={(evento) => setUserData({...userData, nome: evento.target.value})} />
        </GridItem>

        <GridItem colSpan={2}>
          <ModalInput
            title='Matrícula'
            placeholder='Número de identificação do Funcionário'
            onChange={(evento) => setUserData({...userData, matricula: evento.target.value})} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <ModalInput
            title='E-mail'
            placeholder='E-mail do Funcionário'
            onChange={(evento) => setUserData({...userData, contato: evento.target.value})} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3}>
          <ModalInput
            title='Usuário'
            placeholder='Nome de Usuário do Funcionário'
            onChange={(evento) => setUserData({...userData, usuario: evento.target.value})} />

          <ModalInput
            title='Senha'
            placeholder='Senha do Funcionário'
            onChange={(evento) => setUserData({...userData, senha: evento.target.value})} />
        </GridItem>

        <GridItem colSpan={2}>
          <Text fontSize='20'>Nível</Text>
          <Select
            placeholder='---Nível de Permissão do Funcionário---'
            onChange={(evento) => setUserData({...userData, role: evento.target.value})} >
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