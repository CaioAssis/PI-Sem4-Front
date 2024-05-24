import { Box, Button, Divider, Grid, GridItem, Input } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import CreateModal from '../../create-modal';
import { useEffect, useState } from 'react';
import api from '../../../../helpers/axios';
import { ModuloDescricao } from '../../../interfaces/moduloDescricao';
import ModuloList from '../modulo-list';

interface Props {
  onClose: () => void;
}

export function CreateMaq({ onClose }: Props) {
  function addMaq() {
    if (descricao !== '' && vistorias !== '') {
      const newMaq = {
        descricao: descricao,
        vistorias: vistorias,
      };

      onClose();
    } else {
      alert('Os campos precisam estar preenchidos!');
    }
  }

  const [descricao, setDescricao] = useState('');
  const [vistorias, setVistorias] = useState('');
  const [modulos, setModulo] = useState<ModuloDescricao[]>([
    { id: 1, titulo: 'módulo 1', descricao: 'módulo legal 1', imagem: '.png' },
    { id: 2, titulo: 'módulo 2', descricao: 'módulo legal 2', imagem: '.png' },
    { id: 3, titulo: 'módulo 3', descricao: 'módulo legal 3', imagem: '.png' },
    { id: 4, titulo: 'módulo 4', descricao: 'módulo legal 4', imagem: '.png' },
    { id: 5, titulo: 'módulo 5', descricao: 'módulo legal 5', imagem: '.png' },
  ]);

  const [filtro, setFiltro] = useState<ModuloDescricao[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [adiciona, setAdiciona] = useState<ModuloDescricao[]>([]);

  useEffect(() => {
    const filtrados = modulos.filter((item) =>
      item.titulo.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltro(filtrados);
  }, [inputValue, modulos]);

  function addModulo(modulo: ModuloDescricao) {
    if (!adiciona.some((item) => item.id === modulo.id)) {
      setAdiciona([...adiciona, modulo]);
    }
  }

  function removeModulo(modulo: ModuloDescricao) {
    setAdiciona(adiciona.filter((item) => item.id !== modulo.id));
  }

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={3}>
        <GridItem colSpan={5}>
          <ModalInput
            title="Máquina"
            placeholder="Chassi da máquina"
            onChange={(evento) => setDescricao(evento.target.value)}
          />
        </GridItem>

        <GridItem colSpan={3}>
          <Input
            rounded={15}
            type="text"
            value={inputValue}
            bg="white"
            w="100%"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            placeholder="Digite o nome do módulo"
          />
          <Box
            rounded={15}
            marginTop="10px"
            maxH="350px"
            overflowY="scroll"
            border="1px solid"
            borderColor="gray.200"
          >
            {filtro.map((modulo) => (
              <ModuloList
                onClick={() => addModulo(modulo)}
                key={modulo.id}
                modulo={modulo}
              />
            ))}
          </Box>
        </GridItem>

        <GridItem colSpan={3}>
          <Box rounded={15} marginTop="10px" maxH="350px" overflowY="scroll">
            {adiciona.map((modulo) => (
              <ModuloList  onClick={() => removeModulo(modulo)} key={modulo.id} modulo={modulo} />
            ))}
          </Box>
        </GridItem>

        <GridItem colSpan={5} mb={3}>
          <Divider />
        </GridItem>

        <GridItem colSpan={3} justifySelf="end">
          <Button onClick={addMaq}>Criar Máquina</Button>
        </GridItem>

        <GridItem colSpan={2} justifySelf="end">
          <Button onClick={onClose}>Cancelar</Button>
        </GridItem>
      </Grid>
    </>
  );
}
export default CreateMaq;
