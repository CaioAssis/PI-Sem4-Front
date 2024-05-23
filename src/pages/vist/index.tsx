import { useState } from "react"
import { Vistoria } from "../../components/interfaces/vistoria"
import Layout from "../../components/layout"
import VistoriaList from "../../components/modal/vistoria/vistoria-list"

function Vist() {
    const [vist, setVist] = useState<Vistoria[]>([
        { id: 1, data: '20/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: 'isso é o que foi escrito na maquina modulo 1/][/isso é o que foi escrito na maquina modulo 2', maquina: 1 },
        { id: 2, data: '21/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: 'isso é o que foi escrito na maquina modulo 1/][/isso é o que foi escrito na maquina modulo 2', maquina: 1 },
        { id: 3, data: '22/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: '/][/', maquina: 1 },
        { id: 4, data: '22/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: '/][/', maquina: 2 },
        { id: 5, data: '23/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: '/][/', maquina: 2 },
        { id: 6, data: '23/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: '/][/', maquina: 1 },
        { id: 7, data: '23/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', texto: 'isso é o que foi escrito na maquina modulo 1/][/isso é o que foi escrito na maquina modulo 2', maquina: 3 }
    ])
    return (

        <Layout>
            {
                vist.map((vistoria) => (
                    <VistoriaList key={vistoria.id} vistoria={vistoria} />
                ))
            }
        </Layout>

    )
}

export default Vist