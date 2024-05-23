import { Button, Divider, Grid, GridItem } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { Cliente } from '../../../interfaces/cliente';
import { useState } from 'react';

interface ClientProps {
    client: Cliente
    onClose: () => void
}

export function UpdateClientForm({ client, onClose }: ClientProps) {

    function editClient() {
        if (nome != '' && cpf != '' && contato != '') {
            const newClient = {
                nome: nome,
                cpf: cpf,
                contato: contato
            }

            console.log(newClient.nome)
            onClose()

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const [nome, setNome] = useState(client.nome)
    const [cpf, setCpf] = useState(client.cpf)
    const [contato, setContato] = useState(client.contato)

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Nome'
                        placeholder='Nome do Cliente'
                        onChange={(evento) => setNome(evento.target.value)}
                        defaultValue={client.nome} />
                </GridItem>

                <GridItem colSpan={2}>
                    <ModalInput
                        title='CPF'
                        placeholder='Número do CPF do Cliente'
                        defaultValue={client.cpf}
                        onChange={(evento) => setCpf(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <ModalInput
                        title='E-mail'
                        placeholder='E-mail do Cliente'
                        defaultValue={client.contato}
                        onChange={(evento) => setContato(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3} justifySelf='end'>
                    <Button onClick={editClient}>Editar Cliente</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf='end'>
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>

            </Grid>
        </>
    )
}
export default UpdateClientForm