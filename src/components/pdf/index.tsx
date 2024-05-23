import React from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import html2pdf from 'html2pdf.js';

const PdfContent = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Box ref={ref} padding="4" backgroundColor="white" textAlign='start'>
    <h1>Minha Página PDF</h1>
    <p>Este é o conteúdo que será transformado em PDF.</p>
  </Box>
));

const CreatePdf: React.FC = () => {
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
        <PdfContent ref={contentRef} />
      </Box>
    </ChakraProvider>
  );
};

export default CreatePdf;
