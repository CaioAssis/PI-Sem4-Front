import { Box, Text } from "@chakra-ui/react"
import { Funcionario } from "../../../interfaces/funcionario"
import CreateModal from "../../create-modal"
import { useState } from "react"
import UpdateUserForm from "../update-user-form"

interface UserProps {
    user: Funcionario
    reload: () => void
}
export default function UserList({ user, reload }: UserProps) {

    const [updateOpen, setUpdateOpen] = useState(false)
    const handleOpenModalUpdate = () => {
        setUpdateOpen(true)
    }

    const handleCloseModalUpdate = () => {
        setUpdateOpen(false)
    }

    return (
        <Box w='80%' p={2} display='flex' gap={5}>
            <Box p={2}
                display='flex'
                gap={5}
                w='100%'
                bg='lightgray'
                justifyContent='flex-start'
                cursor="pointer"
                border="1px solid"
                borderColor="gray.200"
                rounded={15} mb={2}
                onClick={handleOpenModalUpdate}>
                <Text alignContent=''>
                    {user.matricula} - {user.nome}
                </Text>
            </Box>
            <CreateModal label='Editar Usuário' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <UpdateUserForm user={user} onClose={handleCloseModalUpdate} reload={reload}/>
            </CreateModal>
        </Box>
    )
}