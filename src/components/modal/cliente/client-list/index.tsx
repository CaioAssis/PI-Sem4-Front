import { Box, Text } from "@chakra-ui/react"
import { Cliente } from "../../../interfaces/cliente"
import CreateModal from "../../create-modal"
import { useState } from "react"
import UpdateClientForm from "../update-client-form"

interface ClientProps {
    client: Cliente
    reload: () => void
}
export default function ClientList({ client, reload }: ClientProps) {


    const [updateOpen, setUpdateOpen] = useState(false)
    const handleOpenModalUpdate = () => {
        setUpdateOpen(true)
    }

    const handleCloseModalUpdate = () => {
        setUpdateOpen(false)
    }

    return (
        <Box w='80%' p={2} display='flex' gap={5} >
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
                    {client.cpf} - {client.nome}
                </Text>
            </Box>
            <CreateModal label='Editar Cliente' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <UpdateClientForm client={client} onClose={handleCloseModalUpdate} reload={reload}/>
            </CreateModal>
        </Box>
    )
}