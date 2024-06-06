import { useState } from "react"
import { Vistoria } from "../../components/interfaces/vistoria"
import Layout from "../../components/layout"
import VistoriaList from "../../components/modal/vistoria/vistoria-list"
import ImageExample from "../../components/pdf/img-example"
import VSearchView from "../../components/modal/vistoria/vistoria-search-view"

function Vist() {
    const [vist, setVist] = useState<Vistoria[]>([
        {
            id: 1, data: '20/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', maquina: 1,
            moduloInspecao: [
                { id: 1, status: true, descricao: '', imagem: '', moduloDescricao: 1 },
                { id: 2, status: true, descricao: '', imagem: '', moduloDescricao: 2 },
                { id: 3, status: true, descricao: '', imagem: '', moduloDescricao: 3 }]
        },
        {
            id: 2, data: '21/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'NOK', maquina: 1,
            moduloInspecao: [
                { id: 1, status: true, descricao: '', imagem: '', moduloDescricao: 1 },
                { id: 2, status: false, descricao: 'arranhão na porta', imagem: ImageExample, moduloDescricao: 2 },
                { id: 3, status: true, descricao: '', imagem: '', moduloDescricao: 3 }]
        },
        {
            id: 3, data: '21/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'OK', maquina: 2,
            moduloInspecao: [
                { id: 1, status: true, descricao: '', imagem: '', moduloDescricao: 1 },
                { id: 2, status: true, descricao: '', imagem: '', moduloDescricao: 2 },
                { id: 3, status: true, descricao: '', imagem: '', moduloDescricao: 3 }]
        },
        {
            id: 4, data: '22/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'NOK', maquina: 1,
            moduloInspecao: [
                { id: 1, status: true, descricao: '', imagem: '', moduloDescricao: 1 },
                { id: 2, status: false, descricao: 'arranhão na porta', imagem: ImageExample, moduloDescricao: 2 },
                { id: 3, status: true, descricao: '', imagem: '', moduloDescricao: 4 }]
        },
        {
            id: 5, data: '22/05/2024', anexo: 'urlAnexo/Anexo.pdf', status: 'NOK', maquina: 2,
            moduloInspecao: [
                { id: 1, status: true, descricao: '', imagem: '', moduloDescricao: 1 },
                { id: 2, status: false, descricao: 'pneu furado', imagem: ImageExample, moduloDescricao: 2 },
                { id: 3, status: true, descricao: '', imagem: '', moduloDescricao: 3 }]
        }])
    return (

        <Layout>

                    <VSearchView/>

        </Layout>

    )
}

export default Vist