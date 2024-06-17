import { Button } from '@chakra-ui/react';

interface BotaoProps {
  label: string
  onClick: () => void
  display?: string
  justifyContent?: string
  bg?: string
}

export function ModalButton({ label, display, justifyContent, onClick, bg }: BotaoProps) {
  return (
    <Button 
    onClick={onClick} 
    bg={bg?bg:"#EDEBEB"} 
    margin={5} 
    display={display} 
    justifyContent={justifyContent}>
      {label}
    </Button>
  );
}

export default ModalButton