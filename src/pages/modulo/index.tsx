import { useState } from "react"
import Layout from "../../components/layout"
import CreateModulo from "../../components/modal/modulo/create-modulo"
import ModalButton from "../../components/modal/modal-button"
import UpdateModulo from "../../components/modal/modulo/update-modulo";
import CreateModal from "../../components/modal/create-modal";

function Modulo() {
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

            <ModalButton label='Criar módulo' onClick={handleOpenModalCreate} />
            <CreateModal label='Criar módulo' isOpen={createOpen} onClose={handleCloseModalCreate}>
                <CreateModulo onClose={handleCloseModalCreate}/>
            </CreateModal>

            <ModalButton label='Editar módulo' onClick={handleUpdateShow}/>
            {updateShow && <UpdateModulo/> }

        </Layout>
    )
}
export default Modulo