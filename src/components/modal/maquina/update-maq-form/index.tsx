import { Box, Button, Divider, Grid, GridItem, Input } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { Maquina } from '../../../interfaces/maquina';
import { useEffect, useState } from 'react';
import ModuloList from '../modulo-list';
import { ModuloDescricao } from '../../../interfaces/moduloDescricao';
import MockModulos from '../../../mockup/mock-modulo';
import api from '../../../../helpers/axios';

interface MaquinaProps {
    maq: Maquina
    onClose: () => void
}

export function UpdateClientForm({ maq, onClose }: MaquinaProps) {

    const [inputValue, setInputValue] = useState('');
    const [filtro, setFiltro] = useState<ModuloDescricao[]>([]);

    const [adiciona, setAdiciona] = useState<ModuloDescricao[]>([])
    const [modulos, setModulos] = useState<ModuloDescricao[]>([]);

    function editMaq() {
        if (maq.descricao != '') {
            const updateMaq = {
                descricao: maq.descricao,
                modulos: adiciona ? adiciona : []
            }

            console.log(updateMaq)
            api.put(`/maquina/update`, updateMaq)
                .then(() => onClose())
                .catch((e) => console.log("Erro: " + e))
        }


        else alert('Os campos precisam estar preenchidos!')
    }

    function atualizarModulos() {
        const fetchMod = async () => {
            try {
                const filtrados = await api.get('/modulo/get')
                setModulos(filtrados.data)
                setFiltro(filtrados.data)
            }
            catch (error) {
                console.error("Erro ao buscar usuário", error)
            }
        }

        fetchMod();
    }

    useEffect(() => {
        atualizarModulos()
    }, [])

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
                        onChange={(evento) => setFormMaq({ ...formMaq, descricao: evento.target.value })}
                        defaultValue={maq.descricao}
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
                            <ModuloList onClick={() => removeModulo(modulo)} key={modulo.id} modulo={modulo} />
                        ))}
                    </Box>
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
export default UpdateClientForm