import { Box, Button, Checkbox, Divider, Text, Grid, GridItem } from '@chakra-ui/react';
import { Maquina } from '../../../interfaces/maquina';
import { useEffect, useState } from 'react';
import { ModuloDescricao } from '../../../interfaces/moduloDescricao';
import MockModulos from './mock-modulo';
import ModalTextarea from '../../modal-textarea';

interface MaquinaProps {
    maq: Maquina
    onClose: () => void
}

export function VistoriaNew({ maq, onClose }: MaquinaProps) {

    function editMaq() {
        if (maq.descricao != '') {
            const newMaq = {
                descricao: maq.descricao,
                modulos: maq.modulos
            }

            console.log(newMaq.descricao)
            onClose()

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const createModuloFromNumbers = (numbers: number[]): ModuloDescricao[] => {
        return numbers.map(num => ({
            id: MockModulos[num - 1].id,
            titulo: MockModulos[num - 1].titulo,
            descricao: MockModulos[num - 1].descricao,
            imagem: MockModulos[num - 1].imagem,
        }));
    }

    const [formMaq, setFormMaq] = useState({
        id: maq.id,
        descricao: maq.descricao,
        modulos: maq.modulos
    })

    const [inputValue, setInputValue] = useState('')
    const [filtro, setFiltro] = useState<ModuloDescricao[]>([])
    const [adiciona, setAdiciona] = useState<ModuloDescricao[]>(createModuloFromNumbers(maq.modulos))

    const [modulos, setModulos] = useState<ModuloDescricao[]>(MockModulos)

    useEffect(() => {
        const filtrados = modulos.filter((item) =>
            item.titulo.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFiltro(filtrados)
    }, [inputValue, modulos])

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
                <GridItem colSpan={6}>
                    {maq.modulos.map((modulo) => (
                        <Box marginBottom='20px' w=''>

                            <ModalTextarea
                                title={MockModulos[modulo - 1].titulo}
                                placeholder={MockModulos[modulo - 1].descricao}
                                imagem={MockModulos[modulo - 1].imagem} />

                            <Box display='flex' alignItems='start' >
                                <Checkbox
                                    mt='5px'
                                    mb='5px'
                                    mr='5px'
                                    colorScheme='green'
                                    size='lg' />
                                <Text alignSelf='center'>OK</Text>
                            </Box>

                            <Divider />
                        </Box>

                    ))}
                </GridItem>
                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3} justifySelf="end">
                    <Button onClick={editMaq}>Atualizar Máquina</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf="end">
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>
            </Grid>
        </>
    )
}
export default VistoriaNew