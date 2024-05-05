import { Input, Text } from "@chakra-ui/react"

interface InputProps{
    title : string
    placeholder: string
}

function ModalInput({ title, placeholder }: InputProps){
    return(
        <>
            <Text fontSize='20'>{title}</Text>
            <Input 
            rounded={15}
            bg='white' placeholder={placeholder}/>
        </>
    )
}

export default ModalInput