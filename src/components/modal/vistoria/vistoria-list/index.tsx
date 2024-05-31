import { Box } from "@chakra-ui/react"
import CreateModal from "../../create-modal/index"
import { useState } from "react"
import { Vistoria } from "../../../interfaces/vistoria"
import ModalButton from "../../modal-button/index"
import CreatePdf from "../../../pdf/index"

interface UserProps {
    vistoria: Vistoria
}
export default function VistoriaList({ vistoria }: UserProps) {


const [createOpen, setCreateOpen] = useState(false)
const handleOpenModalCreate = () => {
    setCreateOpen(true)
}

const handleCloseModalCreate = () => {
    setCreateOpen(false)
}

    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <ModalButton label={vistoria.data}
                onClick={ handleOpenModalCreate } />
            <CreateModal label={'Vistoria nº' + vistoria.id} isOpen={createOpen} onClose={handleCloseModalCreate}>
                <CreatePdf vistoria={vistoria} />
            </CreateModal>
        </Box>
    )
}
