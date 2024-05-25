import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../interfaces/maquina"
import CreateModal from "../../create-modal"
import { useState } from "react"

interface MaqProps {
    maq: Maquina
}
export default function VistMaqList({ maq }: MaqProps) {


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
                    {maq.descricao}
                </Text>
            </Button>
            <CreateModal label='Editar Máquina' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <Text>oi</Text>
            </CreateModal>
        </Box>
    )
}