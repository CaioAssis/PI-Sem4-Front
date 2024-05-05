import { useState } from "react"
import Layout from "../../components/layout"
import CreateUser from "../../components/modal/funcionario/create-user"
import ModalButton from "../../components/modal/modal-button"
import UpdateUser from "../../components/modal/funcionario/update-user";
import CreateModal from "../../components/modal/create-modal";

function AdmUser() {
    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false)

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

    return (
        <Layout>

            <ModalButton label='Criar Usuário' onClick={handleOpenModalCreate} />
            <CreateModal label='Criar Usuário' isOpen={createOpen} onClose={handleCloseModalCreate}>
                <CreateUser />
            </CreateModal>

            <ModalButton label='Editar Usuário' onClick={handleOpenModalUpdate} />
            <CreateModal label='Editar Usuário' isOpen={updateOpen} onClose={handleCloseModalUpdate}>
                <UpdateUser />
            </CreateModal>

        </Layout>
    )
}
export default AdmUser