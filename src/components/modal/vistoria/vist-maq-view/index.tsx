import { Box, Button, Text } from "@chakra-ui/react"
import { Maquina } from "../../../interfaces/maquina"
import CreateModal from "../../create-modal"
import { useState } from "react"
import VistoriaNew from "../vistoria-new"
import MockModulos from "../vistoria-new/mock-modulo"
import ModalButton from "../../modal-button"

interface MaqProps {
    maq: Maquina
}
export default function VistMaqView({ maq }: MaqProps) {


    const [updateOpen, setUpdateOpen] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)

    const handleOpenModal = () => {
        setUpdateOpen(true)
    }

    const handleCloseModal = () => {
        setUpdateOpen(false)
    }

    const handleUpdateShow = () => {
        setUpdateShow(!updateShow);
    };

    const [filtro, setFiltro] = useState<Maquina[]>([])
    useEffect(() => {
        const filtrados = maquina.filter((item) =>
            item.descricao.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFiltro(filtrados);
    }, [inputValue])

    const vistorias = filtro.map((maq) => (
        <VistMaqView key={maq.id} maq={maq} />
    ))
    

    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <Button w='100%' bg='lightgray' justifyContent='flex-start'
                onClick={handleOpenModal}>
                <Text alignContent=''>
                    {maq.descricao}
                </Text>
            </Button>
            <CreateModal label='Criar Vistoria' isOpen={updateOpen} onClose={handleCloseModal}>
                <VistoriaNew maq={maq} onClose={handleCloseModal} />
                <ModalButton label='Editar Usuário' onClick={handleUpdateShow} />
                {updateShow && filtro.map((maq) => (
        <VistMaqView key={maq.id} maq={maq} />
    ))}
            </CreateModal>
        </Box>
    )
}//vistoria list