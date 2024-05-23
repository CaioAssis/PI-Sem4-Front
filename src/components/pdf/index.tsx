 import React from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import html2pdf from 'html2pdf.js';
import VistoriaView from '../modal/vistoria/vistoria-view/index';
import { Vistoria } from '../interfaces/vistoria';

interface Props {
  vistoria: Vistoria
}

const PdfContent = React.forwardRef<HTMLDivElement>(({vistoria}: Props, ref: any) => (
  <Box ref={ref} padding="4" backgroundColor="white" textAlign='start'>
      {console.log(vistoria.id)}
    <VistoriaView vistoria={vistoria} />
  </Box>
));

const CreatePdf: React.FC = ({vistoria}:Props) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const vist = vistoria
  console.log(vist.id)
  const handleDownloadPdf = () => {
    if (contentRef.current) {
      html2pdf()
        .from(contentRef.current)
        .set({
          filename: 'documento.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .save();
    }
  };

  return (
    <ChakraProvider>
      <Box padding="4" backgroundColor="gray.100" minHeight="100vh">
        <Button onClick={handleDownloadPdf} colorScheme="blue" marginBottom="4">
          Download PDF
        </Button>
        <VistoriaView vistoria={vistoria} ref={contentRef}/>
      </Box>
    </ChakraProvider>
  );
};

export default CreatePdf;
