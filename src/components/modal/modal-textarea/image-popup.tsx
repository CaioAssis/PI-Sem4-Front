// ImagePopup.tsx
import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Image, ModalCloseButton } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

interface ImagePopupProps {
  imageUrl: string
  onClose: () => void
  descricao?: string
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageUrl, descricao, onClose }) => {
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
            <Text fontSize='14'>{descricao}</Text>
          <Image src={imageUrl} alt="Popup Image" />
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  )
}

export default ImagePopup
