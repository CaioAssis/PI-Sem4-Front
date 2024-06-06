import { Button } from '@chakra-ui/react';

interface BotaoProps {
  label: string
  onClick: () => void
  display?: string
  justifyContent?: string
}

export function ModalButton({ label, display, justifyContent, onClick }: BotaoProps) {
  return (
    <Button onClick={onClick} bg="#EDEBEB" margin={5} display={display} justifyContent={justifyContent}>
      {label}
    </Button>
  );
}

export default ModalButton