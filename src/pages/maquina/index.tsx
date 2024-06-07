import { useState } from "react"
import Layout from "../../components/layout"
import CreateMaq from "../../components/modal/maquina/create-maq"
import ModalButton from "../../components/modal/modal-button"
import UpdateMaq from "../../components/modal/maquina/update-maq";
import CreateModal from "../../components/modal/create-modal";

function Maquina() {
    const [createOpen, setCreateOpen] = useState(false)
    const [updateShow, setUpdateShow] = useState(false)

    const handleOpenModalCreate = () => {
        setCreateOpen(true)
    }

    const handleCloseModalCreate = () => {
        setCreateOpen(false)
    }

    const handleUpdateShow = () => {
        setUpdateShow(!updateShow);
      };

    return (
        <Layout>

            <ModalButton label='Criar Máquina' onClick={handleOpenModalCreate} />
            <CreateModal label='Criar Máquina' isOpen={createOpen} onClose={handleCloseModalCreate}>
                <CreateMaq onClose={handleCloseModalCreate}/>
            </CreateModal>

            <ModalButton label='Editar Máquina' onClick={handleUpdateShow}/>
            {updateShow && <UpdateMaq/> }

        </Layout>
    )
}
export default Maquina