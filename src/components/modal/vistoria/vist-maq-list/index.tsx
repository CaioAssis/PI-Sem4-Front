import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../interfaces/maquina"
import CreateModal from "../../create-modal"
import { useState } from "react"
import VistoriaNew from "../vistoria-new"
import MockModulos from "../vistoria-new/mock-modulo"

interface MaqProps {
    maq: Maquina
}
export default function VistMaqList({ maq }: MaqProps) {


    const [updateOpen, setUpdateOpen] = useState(false)
    const handleOpenModal = () => {
        setUpdateOpen(true)
    }

    const handleCloseModal = () => {
        setUpdateOpen(false)
    }

    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <Button w='100%' bg='lightgray' justifyContent='flex-start'
                onClick={handleOpenModal}>
                <Text alignContent=''>
                    {maq.descricao}
                </Text>
            </Button>
            <CreateModal label='Criar Vistoria' isOpen={updateOpen} onClose={handleCloseModal}>
                <VistoriaNew maq={maq} onClose={handleCloseModal}/>
            </CreateModal>
        </Box>
    )
}