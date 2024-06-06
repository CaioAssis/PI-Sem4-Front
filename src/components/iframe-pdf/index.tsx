interface ShowPDFProps {
    url: string
    onClose: () => void;
  }

export default function ShowPDF({url}: ShowPDFProps) {
    return (
        <iframe
            src={url}
            style={{
                width: "100%",
                height: "100vh",
                border: "none"
              }}/>
    )
}