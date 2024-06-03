import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VistMaqList from "../vist-maq-list";
import { Maquina } from "../../../interfaces/maquina";
import { Text } from "@chakra-ui/react";


export default function VSearchView() {
    const [maquina, setMaq] = useState<Maquina[]>([
        { id: 1, descricao: 'chassi 1', modulos: [1, 2, 3], vistorias: [1, 2] },
        { id: 2, descricao: 'chassi 2', modulos: [5, 3], vistorias: [3, 5] },
        { id: 3, descricao: 'chassi 3', modulos: [5, 2], vistorias: [] },
        { id: 4, descricao: 'chassi 4', modulos: [4, 1], vistorias: [4] },
        { id: 5, descricao: 'chassi 5', modulos: [3, 4], vistorias: [] }])
    const [filtro, setFiltro] = useState<Maquina[]>([])



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
                <VistMaqList key={maq.id} maq={maq} />
            ))
            }
        </>
    )

}