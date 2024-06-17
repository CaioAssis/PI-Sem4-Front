import React, { useState } from 'react'
import { Box, Button, ChakraProvider } from '@chakra-ui/react'
import html2pdf from 'html2pdf.js'
import VistoriaView from '../modal/vistoria/vistoria-view'
import { Vistoria } from '../interfaces/vistoria'
import { ModuloDescricao } from '../interfaces/moduloDescricao'
import { Maquina } from '../interfaces/maquina'
import api from '../../helpers/axios'

interface Props {
  vistoria: Vistoria
  modulos: ModuloDescricao[]
  maquina: Maquina
  onClose: () => void
}
interface Props2 {
  vistoria: Vistoria
  modulos: ModuloDescricao[]
  maquina: Maquina
}


const PdfContent = React.forwardRef<HTMLDivElement, Props2>(({ vistoria, modulos, maquina }, ref) => (
  <Box ref={ref} padding="4" backgroundColor="white" textAlign='start'>
    <VistoriaView vistoria={vistoria} modulos={modulos} maquina={maquina} />
  </Box>
))

const CreatePdf64: React.FC<Props> = ({ vistoria, modulos, maquina, onClose }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleSave = () => {
    if (contentRef.current) {
      setIsLoading(true)
      html2pdf()
        .from(contentRef.current)
        .set({
          filename: 'documento.pdf',
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .output('datauristring')
        .then((pdfb64) => {
          vistoria.anexo = pdfb64
          //console.log(vistoria.anexo)

          const newVist = {
            data: vistoria.data,
            anexo: vistoria.anexo,
            status: vistoria.status,
            maquina: vistoria.maquina
          }

          //console.log(newVist)
          api.post('/vistoria/save', newVist)
         .then(()=> {
         onClose() 
       }).catch(()=>{alert("Error")})
        })


    }
    else alert('Houve um problema com a geração de pdf!')
  }

  return (
    <ChakraProvider>
      <Box padding="4" backgroundColor="gray.100" minHeight="100vh">
        <Button isLoading={isLoading} onClick={handleSave} colorScheme="green" marginBottom="4">
          Concluir Vistoria
        </Button>
        <PdfContent vistoria={vistoria} ref={contentRef} modulos={modulos} maquina={maquina} />
      </Box>
    </ChakraProvider>
  )
}

export default CreatePdf64