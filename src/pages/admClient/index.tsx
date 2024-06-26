import { useState } from "react"
import Layout from "../../components/layout"
import CreateClient from "../../components/modal/cliente/create-client"
import ModalButton from "../../components/modal/modal-button"
import UpdateClient from "../../components/modal/cliente/update-client";
import CreateModal from "../../components/modal/create-modal";

function AdmClient() {
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

            <ModalButton label='Criar Cliente' onClick={handleOpenModalCreate} />
            <CreateModal label='Criar Cliente' isOpen={createOpen} onClose={handleCloseModalCreate}>
                <CreateClient onClose={handleCloseModalCreate}/>
            </CreateModal>

            <ModalButton label='Editar Cliente' onClick={handleUpdateShow}/>
            {updateShow && <UpdateClient/> }

        </Layout>
    )
}
export default AdmClient