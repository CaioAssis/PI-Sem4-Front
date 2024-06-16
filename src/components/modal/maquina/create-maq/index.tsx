import { Box, Button, Divider, Grid, GridItem, Input, Select } from '@chakra-ui/react'
import ModalInput from '../../modal-input'
import { useEffect, useState } from 'react'
import { ModuloDescricao } from '../../../interfaces/moduloDescricao'
import ModuloList from '../modulo-list'
import api from '../../../../helpers/axios'
import { Cliente } from '../../../interfaces/cliente'

interface Props {
  onClose: () => void
}

export function CreateMaq({ onClose }: Props) {
  function addMaq() {
    if (descricao !== '' && idCliente !== '') {
      const newMaq = {
        descricao: descricao,
        modulos: adiciona ? adiciona : [],
        cliente: idCliente
      }
      console.log(newMaq)
      api.post(`/maquina/save`, newMaq)
        .then(() => onClose())
        .catch((e) => console.log("Erro: " + e))
    } else {
      alert('Os campos precisam estar preenchidos!')
    }
  }

  function atualizarModulos() {
    const fetchMod = async () => {
      try {
        const mod = await api.get('/modulo/get')
        setModulos(mod.data)
        const cli = await api.get('/cliente/get')
        setCliente(cli.data)
      }
      catch (error) {
        console.error("Erro: ", error)
      }
    }

    fetchMod()
  }

  useEffect(() => {
    atualizarModulos()
  }, [])

  const [descricao, setDescricao] = useState('')
  const [idCliente, setIdCliente] = useState('')
  const [modulos, setModulos] = useState<ModuloDescricao[]>([])
  const [cliente, setCliente] = useState<Cliente[]>([])
  const [inputValue, setInputValue] = useState('')
  const [adiciona, setAdiciona] = useState<ModuloDescricao[]>([])

  /* useEffect(() => {
     const filtrados = modulos.filter((item) =>
       item.titulo.toLowerCase().includes(inputValue.toLowerCase())
     )
     setFiltro(filtrados)
   }, [inputValue, modulos])*/

  function addModulo(modulo: ModuloDescricao) {
    if (!adiciona.some((item) => item.id === modulo.id)) {
      setAdiciona([...adiciona, modulo])
    }
  }

  function removeModulo(modulo: ModuloDescricao) {
    setAdiciona(adiciona.filter((item) => item.id !== modulo.id))
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
              setInputValue(event.target.value)
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
            {modulos.map((modulo) => (
              <ModuloList
                onClick={() => addModulo(modulo)}
                key={modulo.id}
                modulo={modulo}
              />
            ))}
          </Box>
        </GridItem>

        <GridItem colSpan={3}>
          <Select
            placeholder='---Cliente---'
            onChange={(evento) => setIdCliente(evento.target.value)} >
            {cliente && cliente.map((item)=>(
              <option value={item.id}>{item.nome} - {item.cpf}</option>
            ))}
          </Select>
          <Box rounded={15} marginTop="10px" maxH="350px" overflowY="scroll">
            {adiciona.map((modulo) => (
              <ModuloList onClick={() => removeModulo(modulo)} key={modulo.id} modulo={modulo} />
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
  )
}
export default CreateMaq
