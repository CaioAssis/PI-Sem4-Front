import { Input, Text } from "@chakra-ui/react"

interface InputProps{
    title : string
    placeholder: string
    value?: string
}

function ModalInput({ title, placeholder, value }: InputProps){
    return(
        <>
            <Text fontSize='20'>{title}</Text>
            <Input 
            rounded={15}
            bg='white' 
            placeholder={placeholder}
            value={value}/>
        </>
    )
}

export default ModalInput