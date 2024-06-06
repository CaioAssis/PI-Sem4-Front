import { Box, Text } from "@chakra-ui/react"
import { ModuloDescricao } from "../../../interfaces/moduloDescricao"

interface ModuloProps {
    modulo: ModuloDescricao
    onClick?: () => void
}
const ModuloList: React.FC<ModuloProps> = ({ modulo, onClick }) => {
    return (
        <Box p={2} display='flex' gap={5} margin='5px' w='95%' bg='lightgray' justifyContent='flex-start' onClick={onClick} cursor="pointer" border="1px solid" borderColor="gray.200" rounded={15} mb={2}>
            <Text>{modulo.titulo} - {modulo.descricao}</Text>
        </Box>
    );
};

export default ModuloList;