import { Box, Button, Text } from "@chakra-ui/react"
import CreateModal from "../../create-modal"
import { useState } from "react"
import { Vistoria } from "../../../interfaces/vistoria"
import { useNavigate } from "react-router-dom"

interface UserProps {
    vistoria: Vistoria
}
export default function VistoriaList({ vistoria }: UserProps) {
    const navigate = useNavigate()
    return (
        <Box w='80%' p={2} display='flex' gap={5} margin='5px'>
            <Button w='100%' bg='lightgray' justifyContent='flex-start'
                onClick={() => {navigate('/sobre')}}>
                <Text alignContent=''>
                    {vistoria.data}
                </Text>
            </Button>
        </Box>
    )
}