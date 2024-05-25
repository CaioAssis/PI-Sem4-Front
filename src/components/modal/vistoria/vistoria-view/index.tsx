import { Vistoria } from "../../../interfaces/vistoria";
import { Text, Image, Box  } from '@chakra-ui/react';
import ImageExample from "../../../pdf/img-example";
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
                    <Text marginBottom='10px'>{item.descricao}</Text>
                    {item.imagem != '' && (<img src={ImageExample}
                    alt="" height="200px" width="200px" />)}
                    <Text>-------------</Text>
                </>
            ))}
        </>
    )
}


export default VistoriaView