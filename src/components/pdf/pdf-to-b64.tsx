import React from 'react'
import { Box, Button, ChakraProvider } from '@chakra-ui/react'
import html2pdf from 'html2pdf.js'
import VistoriaView from '../modal/vistoria/vistoria-view'
import { Vistoria } from '../interfaces/vistoria'
import { ModuloDescricao } from '../interfaces/moduloDescricao'

interface Props {
  vistoria: Vistoria
  modulos: ModuloDescricao[]
}


const PdfContent = React.forwardRef<HTMLDivElement, Props>(({ vistoria, modulos }, ref) => (
  <Box ref={ref} padding="4" backgroundColor="white" textAlign='start'>
    <VistoriaView vistoria={vistoria} modulos={modulos}/>
  </Box>
));

const CreatePdf64: React.FC<Props> = ({ vistoria, modulos }) => {
  const contentRef = React.useRef<HTMLDivElement>(null)

  const handleDownloadPdf = () => {
    if (contentRef.current) {
      html2pdf()
        .from(contentRef.current)
        .set({
          filename: 'documento.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .output('datauristring')
        .then((pdfb64) => {
          vistoria.anexo = pdfb64
          console.log(vistoria.anexo)
        })
    }
  };
  
  return (
    <ChakraProvider>
      <Box padding="4" backgroundColor="gray.100" minHeight="100vh">
        <Button onClick={handleDownloadPdf} colorScheme="blue" marginBottom="4">
          Concluir Vistoria
        </Button>
        <PdfContent vistoria={vistoria} ref={contentRef} modulos={modulos}/>
      </Box>
    </ChakraProvider>
  )
}

export default CreatePdf64