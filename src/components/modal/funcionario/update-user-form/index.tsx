import { Button, Divider, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { Funcionario } from '../../../interfaces/funcionario';
import { useState } from 'react';
import api from '../../../../helpers/axios';

interface UserProps {
    user: Funcionario
    onClose: () => void
    reload: () => void
}

export function UpdateUserForm({ user, onClose, reload }: UserProps) {

    function editUser() {
        if (userData.nome != '' && userData.matricula != '' && userData.contato != '' && userData.usuario != '' && userData.senha != '' && userData.role != '') {
            setIsLoading(true)
            const newUser = {
                nome: userData.nome,
                matricula: userData.matricula,
                contato: userData.contato,
                usuario: userData.usuario,
                senha: userData.senha,
                role: userData.role
            }
            
            api.put(`/usuario/update/${user.id}`, newUser)
            .then(()=> {
                onClose()
                reload()})
            .catch(error => {console.log(error)})

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const [isLoading, setIsLoading] = useState(false)
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
                    <Button isLoading={isLoading} onClick={editUser}>Editar Usuário</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf='end'>
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>

            </Grid>
        </>
    )
}
export default UpdateUserForm