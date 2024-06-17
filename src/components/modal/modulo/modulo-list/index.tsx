import { Box, Button, Text } from "@chakra-ui/react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"
import CreateModal from "../../create-modal"
import { useState } from "react"
import UpdateModuloForm from "../update-modulo-form"

interface ModuloProps {
    modulo: ModuloDescricao
    reload: () => void
}
export default function ModuloList({ modulo, reload }: ModuloProps) {


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
                    {modulo.titulo}
                </Text>
            </Box>
            <CreateModal label='Editar Módulo' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <UpdateModuloForm modulo={modulo} onClose={handleCloseModalUpdate} reload={reload} />
            </CreateModal>
        </Box>
    )
}