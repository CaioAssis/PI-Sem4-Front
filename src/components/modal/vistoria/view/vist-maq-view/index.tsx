import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../../interfaces/maquina"
import { useState } from "react"
import { Vistoria } from "../../../../interfaces/vistoria"
import ModalButton from "../../../modal-button"
import CreateModal from "../../../create-modal"
import ShowPDF from "../../../../iframe-pdf"
import api from "../../../../../helpers/axios"

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
    const [vistorias, setVistorias] = useState<Vistoria[]>([])
    //const [filtro, setFiltro] = useState<Vistoria[]>([])

    const handleShow = async () => {
        if(!updateShow){
            try{
           const listVist = await api.get(`/vistoria/getm/${maq.id}`)
           //console.log(listVist.data)
           setVistorias(listVist.data)
        } catch (error) { console.error("Erro: ", error) }

        }
        setUpdateShow(!updateShow);
    }

    /*useEffect(() => {
        setFiltro(vistorias.filter((item) => item.maquina === maq.id));
        console.log(vistorias.filter((item) => item.maquina === maq.id))
    }, [vistorias, maq.id]);*/

    return (
        <>
            <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
                <Button w='100%' bg='lightgray' justifyContent='flex-start'
                    onClick={handleShow}>
                    <Text alignContent=''>
                        {maq.descricao}
                    </Text>
                </Button>

            </Box>
            {updateShow && vistorias.map((e) =>
                <>
                    <Box>
                        <ModalButton bg={e.status=='OK'?'lightgreen':"#EDEBEB"} label={e.data} onClick={() => handleOpenModalUpdate(e.id)} display="flex" justifyContent="flex-start" />
                    </Box>
                    <CreateModal label='Vistoria' isOpen={updateOpen === e.id} onClose={handleCloseModalUpdate}>
                        <ShowPDF url={e.anexo} onClose={handleCloseModalUpdate} />
                    </CreateModal>
                </>
            )}
        </>
    )
}