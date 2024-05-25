import { Button, Divider, Grid, GridItem } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import CreateModal from '../../create-modal';
import { useState } from 'react';
import api from '../../../../helpers/axios';
import ModalInputImage from '../../modal-input-image';

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

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

        <GridItem colSpan={2} mb={3}>
          <ModalInputImage
            title="Upload de Imagem"
            onChange={handleFileChange}
          />
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