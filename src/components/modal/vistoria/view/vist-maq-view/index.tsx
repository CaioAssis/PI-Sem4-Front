import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../../interfaces/maquina"
import { useEffect, useState } from "react"
import { Vistoria } from "../../../../interfaces/vistoria"
import MockVist from "../../../../mockup/mock-vist"
import ModalButton from "../../../modal-button"
import CreateModal from "../../../create-modal"
import ShowPDF from "../../../../iframe-pdf"
import VistoriaList from "../../vistoria-list"

interface MaqProps {
    maq: Maquina
}
export default function VistMaqView({ maq }: MaqProps) {

    const handleOpenModalUpdate = (id: number) => {
        setUpdateOpen(id)
    }

    const handleCloseModalUpdate = () => {
        setUpdateOpen(null)
    }

    const [updateOpen, setUpdateOpen] = useState<number | null>(null)
    const [updateShow, setUpdateShow] = useState(false)
    const [vistorias] = useState<Vistoria[]>(MockVist)
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
                        <VistoriaList vistoria={e}/>
                        <ModalButton label={e.data} onClick={() => handleOpenModalUpdate(e.id)} display="flex" justifyContent="flex-start" />
                    </Box>
                    <CreateModal label='Vistoria' isOpen={updateOpen === e.id} onClose={handleCloseModalUpdate}>
                        <ShowPDF url={e.anexo} onClose={handleCloseModalUpdate} />
                    </CreateModal>
                </>
            )}
        </>
    )
}