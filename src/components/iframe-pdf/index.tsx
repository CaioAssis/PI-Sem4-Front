interface ShowPDFProps {
    url: string
    onClose: () => void;
  }

export default function ShowPDF({url}: ShowPDFProps) {
    return (
        <iframe
            src={url}
            width="100%"
            height="550px"/>
    )
}