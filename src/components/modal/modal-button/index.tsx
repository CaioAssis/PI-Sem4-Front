import { Button } from '@chakra-ui/react';

interface BotaoProps {
  label: string
  onClick: () => void
}

export function ModalButton({ label, onClick }: BotaoProps) {
  return (
    <Button onClick={onClick} bg="#EDEBEB" margin={5}>
      {label}
    </Button>
  );
}

export default ModalButton