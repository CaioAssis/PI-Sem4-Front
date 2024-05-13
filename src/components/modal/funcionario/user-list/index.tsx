import { Box, Button, Text } from "@chakra-ui/react"
import { Funcionario } from "../../../interfaces/funcionario"
import CreateModal from "../../create-modal"
import { useState } from "react"

interface UserProps {
    user: Funcionario
}
////////////NAO FUNCIONA AINDA
export default function UserList({ user }: UserProps) {


    const [updateOpen, setUpdateOpen] = useState(false)
    const handleOpenModalUpdate = () => {
        setUpdateOpen(true)
    }

    const handleCloseModalUpdate = () => {
        setUpdateOpen(false)
    }

    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <Button w='100%' bg='lightgray' justifyContent='flex-start'
                onClick={handleOpenModalUpdate}>
                <Text alignContent=''>
                    {user.matricula} - {user.nome}
                </Text>
            </Button>
            <CreateModal label='Editar Usuário' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                yes
            </CreateModal>
        </Box>
    )
}