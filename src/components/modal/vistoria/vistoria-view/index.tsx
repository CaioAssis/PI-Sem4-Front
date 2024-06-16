import { ModuloDescricao } from "../../../interfaces/moduloDescricao";
import { ModuloInspecao } from "../../../interfaces/moduloInspecao";
import { Vistoria } from "../../../interfaces/vistoria";
import { Text, Box, Grid, Flex  } from '@chakra-ui/react';

interface ViewProps {
    vistoria: Vistoria
    modulos: ModuloDescricao[]
}
function VistoriaView({ vistoria, modulos }: ViewProps) {
    //console.log(vistoria.moduloInspecao)
    //console.log(modulos)
    return (
        <Grid templateColumns="1fr" >
            
            <Flex p={4} mb={8}  justifyContent="space-between" alignItems="center" borderBottom="1px solid black">
                <Text fontWeight="bold" >JOHN DEERE</Text>
                <Text fontWeight="bold" fontSize={25}>VISTORIA </Text>
            </Flex>

            <Text>Dados: {}</Text>
            <Flex paddingLeft={2}  justifyContent="space-between"  wrap={"wrap"} flex="1" border="1px solid black" mb={2} >
                <Text>Id vistoria: {vistoria.id}</Text>
                <Text>Data : {vistoria.data}</Text>
                <Text>Responsavel:  </Text>
                <Text>Cliente:</Text>
                <Text>Id Maquina:  {vistoria.maquina}</Text>
            </Flex>

            <Text>Descrição: {}</Text>
            <Flex justifyContent={""}>
                <Box width="100%" border="1px solid black" mb={2} >
                    {vistoria.moduloInspecao.map(item =>(
                        <Box padding={2} backgroundColor={item.status?'':'lightgray'}>
                            <Text key = {item.id} fontSize={20} >Item: {modulos[item.moduloDescricao-1].titulo}</Text>
                            <Text fontSize={15} >{item.descricao}</Text>
                            {item.imagem != ''&&(<img src={item.imagem}
                            alt='' height="200px" width="200px"/>)}
                        </Box>
                    ))}
                </Box>
            </Flex>
      </Grid>
    )
    
}


export default VistoriaView