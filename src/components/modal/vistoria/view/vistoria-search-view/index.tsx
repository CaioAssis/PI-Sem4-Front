import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VistMaqView from "../vist-maq-view";
import { Maquina } from "../../../../interfaces/maquina";
import MockMaquinas from "../../../../mockup/mock-maquina";

export default function VSearchView() {
    const [maquina, setMaq] = useState<Maquina[]>(MockMaquinas)
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
                <VistMaqView key={maq.id} maq={maq} />
            ))
            }
        </>
    )

}