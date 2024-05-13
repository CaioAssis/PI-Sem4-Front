import { Button, Divider, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import CreateModal from '../../create-modal';

interface Props{
  onClose: () => void
}

export function CreateUser( { onClose }: Props) {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>

        <GridItem colSpan={3}>
          <ModalInput title='Nome' placeholder='Nome do Funcionário' />
        </GridItem>
        <GridItem colSpan={2}>
          <ModalInput title='Matrícula' placeholder='Número de identificação do Funcionário' />
        </GridItem>
        <GridItem colSpan={5} mb={3}>
          <ModalInput title='E-mail' placeholder='E-mail do Funcionário' />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3}>
          <ModalInput title='Usuário' placeholder='Nome de Usuário do Funcionário' />
          <ModalInput title='Senha' placeholder='Senha do Funcionário' />
        </GridItem>

        <GridItem colSpan={2}>
          <Text fontSize='20'>Nível</Text>
          <Select placeholder='---Nível de Permissão do Funcionário---'>
            <option value='ger'>Gerencial</option>
            <option value='fun'>Funcionário Deere</option>
            <option value='ter'>Funcionário Concessionária</option>
          </Select>
        </GridItem>

        <GridItem colSpan={3} justifySelf='end'>
          <Button>Criar Usuário</Button>
        </GridItem>

        <GridItem colSpan={2} justifySelf='end'>
          <Button onClick={onClose}>Cancelar</Button>
        </GridItem>

      </Grid>
    </>
  )
}
export default CreateUser