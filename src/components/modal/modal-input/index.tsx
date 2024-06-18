import { Input, Text } from "@chakra-ui/react"

interface InputProps{
    title : string
    placeholder: string
    defaultValue?: string
    ref?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function ModalInput({ title, placeholder, defaultValue, ref, onChange, type}: InputProps){
    return(
        <>
            <Text fontSize='20'>{title}</Text>
            <Input 
            type={type?type:'text'}
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