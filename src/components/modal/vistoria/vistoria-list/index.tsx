import { Box, Button, Text } from "@chakra-ui/react"
import CreateModal from "../../create-modal/index"
import { useState } from "react"
import { Vistoria } from "../../../interfaces/vistoria"
import ModalButton from "../../modal-button/index"
import VistoriaView from "../vistoria-view/index"

interface UserProps {
    vistoria: Vistoria
}
export default function VistoriaList({ vistoria }: UserProps) {


const [createOpen, setCreateOpen] = useState(false)
const [updateOpen, setUpdateOpen] = useState(false)
const [updateShow, setUpdateShow] = useState(false)
const handleOpenModalCreate = () => {
    setCreateOpen(true)
}

const handleCloseModalCreate = () => {
    setCreateOpen(false)
}

const handleOpenModalUpdate = () => {
    setUpdateOpen(true)
}

const handleCloseModalUpdate = () => {
    setUpdateOpen(false)
}

const handleUpdateShow = () => {
    setUpdateShow(!updateShow);
  };
    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <ModalButton label={vistoria.data}
                onClick={ handleOpenModalCreate } />
            <CreateModal label='PDF' isOpen={createOpen} onClose={handleCloseModalCreate}>
                <VistoriaView vistoria={vistoria} onClose={handleCloseModalCreate} />
            </CreateModal>
        </Box>
    )
}
