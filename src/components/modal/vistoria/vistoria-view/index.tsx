import { Vistoria } from "../../../interfaces/vistoria";
import { Text, Image, Box  } from '@chakra-ui/react';

interface ViewProps {
    vistoria: Vistoria
    ref: any
}
function VistoriaView({ vistoria, ref }: ViewProps) {
    return (
        <Box ref={ref}>
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
        </Box>
    )
}


export default VistoriaView