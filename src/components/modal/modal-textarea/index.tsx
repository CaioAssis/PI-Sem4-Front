import { Button, Flex, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import ImagePopup from "./image-popup"
import { useState } from "react"
interface InputProps {
    title: string
    placeholder: string
    defaultValue?: string
    ref?: string
    imagem?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function ModalTextarea({ title, placeholder, defaultValue, ref, imagem, onChange }: InputProps) {
    const [popupImageUrl, setPopupImageUrl] = useState('')

    const { onOpen } = useDisclosure();
    const handleImageOpen = (imageUrl: string) => {
        setPopupImageUrl(imageUrl)
        onOpen()
    }


    return (
        <>
            <Flex align='start'>
                <Text fontSize='20' marginRight='10px'>{title}</Text>
                {imagem && (
                    <Button
                        size="xs"
                        borderRadius='full'
                        onClick={() => handleImageOpen(imagem != null ? imagem : '')}>
                        ?
                    </Button>)}
                {popupImageUrl && (
                    <ImagePopup imageUrl={popupImageUrl} descricao={placeholder} onClose={() => setPopupImageUrl('')} />)}
            </Flex>

            <Textarea
                rounded={15}
                bg='white'
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
                ref={ref} />
        </>
    )
}

export default ModalTextarea