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
        if (user.nome != '' && user.matricula != '' && user.contato != '' && user.usuario != '' && user.senha != '' && user.role != '') {
            const newUser = {
                nome: user.nome,
                matricula: user.matricula,
                contato: user.contato,
                usuario: user.usuario,
                senha: user.senha,
                role: user.role
            }
            //api.put('/', newUser) ///////////////ARRUMAR
            //.then(()=> {
            console.log(newUser.nome)
            onClose()

            //})

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const [userData, setUserData] = useState({
        nome:user.nome,
        matricula: user.matricula,
        contato:user.contato,
        usuario:user.usuario,
        senha:user.senha,
        role:user.role
    })

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Nome'
                        placeholder='Nome do Funcionário'
                        onChange={(evento) => setUserData({...userData, nome: evento.target.value})}
                        defaultValue={user.nome} />
                </GridItem>

                <GridItem colSpan={2}>
                    <ModalInput
                        title='Matrícula'
                        placeholder='Número de identificação do Funcionário'
                        defaultValue={user.matricula}
                        onChange={(evento) => setUserData({...userData, matricula: evento.target.value})} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <ModalInput
                        title='E-mail'
                        placeholder='E-mail do Funcionário'
                        defaultValue={user.contato}
                        onChange={(evento) => setUserData({...userData, contato: evento.target.value})} />
                </GridItem>

                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Usuário'
                        placeholder='Nome de Usuário do Funcionário'
                        defaultValue={user.usuario}
                        onChange={(evento) => setUserData({...userData, usuario: evento.target.value})} />

                    <ModalInput
                        title='Senha'
                        placeholder='Senha do Funcionário'
                        defaultValue={user.senha}
                        onChange={(evento) => setUserData({...userData, senha: evento.target.value})} />
                </GridItem>

                <GridItem colSpan={2}>
                    <Text fontSize='20'>Nível</Text>
                    <Select
                        placeholder='---Nível de Permissão do Funcionário---'
                        defaultValue={user.role}
                        onChange={(evento) => setUserData({...userData, role: evento.target.value})} >
                        <option value='ger'>Gerencial</option>
                        <option value='fun'>Funcionário Deere</option>
                        <option value='ter'>Funcionário Concessionária</option>
                    </Select>
                </GridItem>

                <GridItem colSpan={3} justifySelf='end'>
                    <Button onClick={editUser}>Criar Usuário</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf='end'>
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>

            </Grid>
        </>
    )
}
export default UpdateUserForm