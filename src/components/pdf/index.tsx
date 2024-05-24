import React from 'react';
import { Box, Button, ChakraProvider, Text } from '@chakra-ui/react';
import html2pdf from 'html2pdf.js';
import VistoriaView from '../modal/vistoria/vistoria-view';
import { Vistoria } from '../interfaces/vistoria';

interface Props {
  vistoria: Vistoria;
}


const PdfContent = React.forwardRef<HTMLDivElement, Props>(({ vistoria }, ref) => (
  <Box ref={ref} padding="4" backgroundColor="white" textAlign='start'>
    <Text> {vistoria.data} - Vistoria {vistoria.id}</Text>
            <Text> {vistoria.status} </Text>
            <Text>--------//--------</Text>
            <Text> </Text>
            {vistoria.moduloInspecao.map(item => (
                <>
                    <Text key={item.id}>{item.moduloDescricao}</Text>
                    <Text>{item.status ? "OK" : "Problema!"}</Text>
                    <Text>{item.descricao}</Text>
                    {item.imagem != '' && (<img src={item.imagem} alt="" height="500px" width="500px" />)}
                    <Text>-------------</Text>
                </>
            ))}
  </Box>
));

const CreatePdf: React.FC<Props> = ({ vistoria }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

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
        <PdfContent vistoria={vistoria} ref={contentRef} />
      </Box>
    </ChakraProvider>
  );
};

export default CreatePdf;