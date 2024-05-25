import { Input, Text } from "@chakra-ui/react"

interface InputProps {
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ModalInputImage({ title, onChange }: InputProps) {
    return (
        <>
            <Text fontSize='20'>{title}</Text>
            <Input
                border={""}
                type="file"
                onChange={onChange}
            />
        </>
    );
}

export default ModalInputImage