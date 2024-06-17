import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Maquina, maquinaGet } from "../../../../interfaces/maquina";
import VistMaqView from "../vist-maq-view";
import api from "../../../../../helpers/axios";

export default function VSearchView() {
    const [maquina, setMaquina] = useState<Maquina[]>([])
    const [filtro, setFiltro] = useState<Maquina[]>([])

    function atualizar() {
        const fetchMaq = async () => {
            try {
                const response = await api.get('/maquina/get')
                const maqGet: maquinaGet[] = response.data
                setMaquina(maqGet.map(item => ({
                    id: item.id,
                    descricao: item.descricao,
                    vistorias: item.vistorias.map(vistoria => vistoria.id),
                    modulos: item.modulosDescricao.map(modulo => modulo.id),
                    cliente: item.cliente
                })))
                setFiltro((maqGet.map(item => ({
                    id: item.id,
                    descricao: item.descricao,
                    vistorias: item.vistorias.map(vistoria => vistoria.id),
                    modulos: item.modulosDescricao.map(modulo => modulo.id),
                    cliente: item.cliente
                }))))
            }
            catch (error) {
                console.error("Erro ao buscar usuário", error)
            }
        }
        fetchMaq()
    }
    useEffect(() => {
        atualizar()
    }, [])

    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        const filtrados = maquina.filter((item) =>
            item.descricao.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFiltro(filtrados);
    }, [inputValue])


    return (
        <>
            <Input
                type='text'
                value={inputValue}
                bg='white'
                w='80%'
                onChange={
                    (event) => {
                        setInputValue(event.target.value);
                    }}
                placeholder='Digite o número do chassi' />

            {filtro.map((maq) => (
                <VistMaqView key={maq.id} maq={maq}/>
            ))
            }
        </>
    )

}