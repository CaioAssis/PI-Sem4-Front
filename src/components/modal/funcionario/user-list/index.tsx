import { Box, Center, Text } from "@chakra-ui/react"
import { Funcionario } from "../../../interfaces/funcionario"

interface UserProps {
    user: Funcionario
}

export default function UserList({ user }: UserProps) {
    return (
        <Box bg='lightgray' w='50%' p={2} color='black' display='flex' borderRadius='lg' gap={5} margin='5px'>
            <Text>
                <Center>
                    {user.matricula} - {user.nome}
                </Center>
            </Text>
        </Box>
    )
}