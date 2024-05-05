import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Center } from '@chakra-ui/react';

interface ModalProps {
    label: string
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
  }
  
  export function CreateModal({ label, isOpen, onClose, children }: ModalProps) {

    return (
      <Modal 
      size='5xl'
      isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#49C855'>
          <ModalHeader textAlign='center' color='white'>{label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
export default CreateModal