import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

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
            <ModalContent bg='white'>
                <ModalHeader textAlign='center' color='black'>{label}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>

                <ModalFooter>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default CreateModal