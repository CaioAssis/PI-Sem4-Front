import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Maquina } from "../../../../interfaces/maquina";
import VistMaqList from "../vist-maq-list";
import MockMaquinas from "../../../../mockup/mock-maquina";

export default function VSearchMaq() {
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
                <VistMaqList key={maq.id} maq={maq} />
            ))
            }
        </>
    )

}