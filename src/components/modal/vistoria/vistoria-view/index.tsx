import { Vistoria } from "../../../interfaces/vistoria";
import { Text, Image, Box  } from '@chakra-ui/react';
interface ViewProps {
    vistoria: Vistoria
}
function VistoriaView({ vistoria }: ViewProps) {
    return (
        <>
            <Text> {vistoria.data} - Vistoria {vistoria.id}</Text>
            <Text> {vistoria.status} </Text>
            <Text>--------//--------</Text>
            <Text> </Text>
            {vistoria.moduloInspecao.map(item => (
                <>
                    <Text key={item.id}>{item.moduloDescricao}</Text>
                    <Text>{item.status ? "OK" : "Problema!"}</Text>
                    <Text>{item.descricao}</Text>
                    {item.imagem != '' && (<img src={item.imagem}
                    alt="" height="500px" width="500px" />)}
                    <Text>-------------</Text>
                </>
            ))}
        </>
    )
}


export default VistoriaView