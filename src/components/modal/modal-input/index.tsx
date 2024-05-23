import { Input, Text } from "@chakra-ui/react"

interface InputProps{
    title : string
    placeholder: string
    defaultValue?: string
    ref?: string
    onChange?: any
}

function ModalInput({ title, placeholder, defaultValue, ref, onChange}: InputProps){
    return(
        <>
            <Text fontSize='20'>{title}</Text>
            <Input 
            rounded={15}
            bg='white' 
            placeholder={placeholder}
            defaultValue={defaultValue}
            ref={ref}
            onChange={onChange}/>
        </>
    )
}

export default ModalInput