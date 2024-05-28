import { Button, Divider, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { Funcionario } from '../../../interfaces/funcionario';
import { useState } from 'react';

interface UserProps {
    user: Funcionario
    onClose: () => void
}

export function UpdateUserForm({ user, onClose }: UserProps) {

    function editUser() {
        if (nome != '' && matricula != '' && contato != '' && usuario != '' && senha != '' && role != '') {
            const newUser = {
                nome: nome,
                matricula: matricula,
                contato: contato,
                usuario: usuario,
                senha: senha,
                role: role
            }
            //api.put('/', newUser) ///////////////ARRUMAR
            //.then(()=> {
            console.log(newUser.nome)
            onClose()

            //})

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const [nome, setNome] = useState(user.nome)
    const [matricula, setMatricula] = useState(user.matricula)
    const [contato, setContato] = useState(user.contato)
    const [usuario, setUsuario] = useState(user.usuario)
    const [senha, setSenha] = useState(user.senha)
    const [role, setRole] = useState(user.role)

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Nome'
                        placeholder='Nome do Funcionário'
                        onChange={(evento) => setNome(evento.target.value)}
                        defaultValue={user.nome} />
                </GridItem>

                <GridItem colSpan={2}>
                    <ModalInput
                        title='Matrícula'
                        placeholder='Número de identificação do Funcionário'
                        defaultValue={user.matricula}
                        onChange={(evento) => setMatricula(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <ModalInput
                        title='E-mail'
                        placeholder='E-mail do Funcionário'
                        defaultValue={user.contato}
                        onChange={(evento) => setContato(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Usuário'
                        placeholder='Nome de Usuário do Funcionário'
                        defaultValue={user.usuario}
                        onChange={(evento) => setUsuario(evento.target.value)} />

                    <ModalInput
                        title='Senha'
                        placeholder='Senha do Funcionário'
                        defaultValue={user.senha}
                        onChange={(evento) => setSenha(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={2}>
                    <Text fontSize='20'>Nível</Text>
                    <Select
                        placeholder='---Nível de Permissão do Funcionário---'
                        defaultValue={user.role}
                        onChange={(evento) => setRole(evento.target.value)} >
                        <option value='ger'>Gerencial</option>
                        <option value='fun'>Funcionário Deere</option>
                        <option value='ter'>Funcionário Concessionária</option>
                    </Select>
                </GridItem>

                <GridItem colSpan={3} justifySelf='end'>
                    <Button onClick={editUser}>Editar Usuário</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf='end'>
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>

            </Grid>
        </>
    )
}
export default UpdateUserForm