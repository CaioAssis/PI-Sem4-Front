declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: { scale: number; useCORS?: boolean }; // Adicionando useCORS aqui
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  interface Html2Pdf {
    from: (element: HTMLElement) => Html2Pdf;
    set: (options: Html2PdfOptions) => Html2Pdf;
    save: () => void;
    output: (type: string) => Promise<string>;
  }

  function html2pdf(): Html2Pdf;

  export = html2pdf;
}
