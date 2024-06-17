import { Box, Button, Divider, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { Maquina } from '../../../interfaces/maquina';
import { useEffect, useState } from 'react';
import ModuloList from '../modulo-list';
import { ModuloDescricao } from '../../../interfaces/moduloDescricao';
import api from '../../../../helpers/axios';
import { Cliente } from '../../../interfaces/cliente';

interface MaquinaProps {
    maq: Maquina
    onClose: () => void
    modulos: ModuloDescricao[]
    reload: () => void
    clientes: Cliente[]
}

export function UpdateClientForm({ maq, onClose, modulos, reload, clientes }: MaquinaProps) {

    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [filtro, setFiltro] = useState<ModuloDescricao[]>([]);

    //const [modulos, setModulos] = useState<ModuloDescricao[]>([]);
    const createModuloFromNumbers = (numbers: number[]): ModuloDescricao[] => {
        return numbers.map(num => ({
            id: modulos[num - 1].id,
            titulo: modulos[num - 1].titulo,
            descricao: modulos[num - 1].descricao,
            imagem: modulos[num - 1].imagem,
        }));
    }
    //const [adiciona, setAdiciona] = useState<ModuloDescricao[]>(modulos.filter((item) => maq.modulos.includes(item.id)))
    const [adiciona, setAdiciona] = useState<ModuloDescricao[]>(createModuloFromNumbers(maq.modulos))
    function editMaq() {
        console.log(maq.cliente.id)
        if (formMaq.descricao != '' && !isNaN(formMaq.cliente)) {
            setIsLoading(true)
            const updateMaq = {
                descricao: formMaq.descricao,
                modulos: adiciona ? adiciona : [],
                cliente: formMaq.cliente

            }
            //console.log(updateMaq)
            api.put(`/maquina/update/${maq.id}`, updateMaq)
                .then(() => {
                    onClose()
                    reload()
                })
                .catch((e) => console.log("Erro: " + e))
        }

        else alert('Os campos precisam estar preenchidos!')
    }

    const [formMaq, setFormMaq] = useState({
        id: maq.id,
        descricao: maq.descricao,
        modulos: maq.modulos,
        cliente: maq.cliente.id
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
                    <Select
                        placeholder={maq.cliente.nome + ' - ' + maq.cliente.cpf}
                        defaultValue={Number(maq.cliente)}
                        onChange={(evento) => setFormMaq({ ...formMaq, cliente: Number(evento.target.value) })} >
                        {clientes && clientes.map((item) => (
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
                    <Button isLoading={isLoading} onClick={editMaq}>Atualizar Máquina</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf="end">
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>
            </Grid>
        </>
    )
}
export default UpdateClientForm