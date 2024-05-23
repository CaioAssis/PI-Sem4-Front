import { Vistoria } from "../../../interfaces/vistoria";
import { Text, Image  } from '@chakra-ui/react';

interface ViewProps {
    vistoria: Vistoria
}
function VistoriaView({ vistoria }: ViewProps) {

    return (
        <>
            <Text> {vistoria.data} - Vistoria {vistoria.id}</Text>
            <Text> {vistoria.status} </Text>
            <Text>-------------------</Text>
            <Text> </Text>
            {vistoria.moduloInspecao.map(item => (
                <>
                    <Text key={item.id}>{item.moduloDescricao}</Text>
                    <Text>{item.status}</Text>
                    <Text>{item.descricao}</Text>
                    <Image src={item.imagem} alt=' ' w='100px' h='100px'/>
                    <Text>-------------</Text>
                </>
            ))}
        </>
    )
}


export default VistoriaView