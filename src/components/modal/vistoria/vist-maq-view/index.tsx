import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../interfaces/maquina"
import { useEffect, useState } from "react"
import { Vistoria } from "../../../interfaces/vistoria"
import MockVist from "../vistoria-new/mock-vist"
import ModalButton from "../../modal-button"
import CreateModal from "../../create-modal"
import ShowPDF from "../../../iframe-pdf"

interface MaqProps {
    maq: Maquina
}
export default function VistMaqView({ maq }: MaqProps) {

    const handleOpenModalUpdate = () => {
        setUpdateOpen(true)
    }

    const handleCloseModalUpdate = () => {
        setUpdateOpen(false)
    }

    const [updateOpen, setUpdateOpen] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)
    const [vistorias, setVistorias] = useState<Vistoria[]>(MockVist)
    const [filtro, setFiltro] = useState<Vistoria[]>([])

    const handleUpdateShow = () => {
        setUpdateShow(!updateShow);
    }

    useEffect(() => {
        setFiltro(vistorias.filter((item) => item.maquina === maq.id));
    }, [vistorias, maq.id]);

    return (
        <>
            <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
                <Button w='100%' bg='lightgray' justifyContent='flex-start'
                    onClick={handleUpdateShow}>
                    <Text alignContent=''>
                        {maq.descricao}
                    </Text>
                </Button>

            </Box>
            {updateShow && filtro.map((e) =>
                <>
                    <Box>
                        <ModalButton label={e.id.toString()} onClick={handleOpenModalUpdate} />
                    </Box>
                    <CreateModal label='Vistoria' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                        <ShowPDF url={e.anexo} onClose={handleCloseModalUpdate} />
                    </CreateModal>
                </>
            )}
        </>
    )
}//vistoria list