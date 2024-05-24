import { Button, Divider, Grid, GridItem } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import CreateModal from '../../create-modal';
import { useState } from 'react';
import api from '../../../../helpers/axios';

interface Props {
  onClose: () => void
}

export function CreateModulo({ onClose }: Props) {
  function addModulo() {
    if (titulo != '' && descricao != '' && imagem != '') {
      const newModulo = {
        titulo: titulo,
        descricao: descricao,
        imagem: imagem
      }

      onClose()

    }
    else alert('Os campos precisam estar preenchidos!')
  }

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')

  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>

        <GridItem colSpan={3}>
          <ModalInput
            title='Nome'
            placeholder='Nome do módulo'
            onChange={(evento) => setTitulo(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={2}>
          <ModalInput
            title='Descrição'
            placeholder='Descrição do módulo'
            onChange={(evento) => setDescricao(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <ModalInput
            title='Imagem'
            placeholder='Imagem ilustrativa do módulo'
            onChange={(evento) => setImagem(evento.target.value)} />
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3} justifySelf='end'>
          <Button onClick={addModulo}>Criar Módulo</Button>
        </GridItem>

        <GridItem colSpan={2} justifySelf='end'>
          <Button onClick={onClose}>Cancelar</Button>
        </GridItem>

      </Grid>
    </>
  )
}
export default CreateModulo