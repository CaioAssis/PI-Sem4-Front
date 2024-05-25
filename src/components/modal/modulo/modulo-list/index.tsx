import { Box, Button, Text } from "@chakra-ui/react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"
import CreateModal from "../../create-modal"
import { useState } from "react"
import UpdateModuloForm from "../update-modulo-form"

interface ModuloProps {
    modulo: ModuloDescricao
}
export default function ModuloList({ modulo }: ModuloProps) {


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
                    {modulo.titulo} - {modulo.descricao}
                </Text>
            </Button>
            <CreateModal label='Editar Módulo' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <UpdateModuloForm modulo={modulo} onClose={handleCloseModalUpdate} />
            </CreateModal>
        </Box>
    )
}