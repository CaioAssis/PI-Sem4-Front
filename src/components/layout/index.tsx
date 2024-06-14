import { Box } from "@chakra-ui/react"
import SimpleSidebar from "../sidebar/index"
interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props
    return (
        <SimpleSidebar>
            <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundSize={"cover"}
                backgroundRepeat="no-repeat"
                minHeight="100vh"
                minWidth="100vh"
                overflow="hidden"
                backgroundImage="url(https://www.deere.com.br/assets/images/region-3/products/harvesters/s-series/s760/r3g002593_colheitadeira_s760_campo_1_large_f312bb1da719e1a7196373ce1c8c6b7bd3cc165e.jpg)"
            >
                <Box
                    bg="rgba(0, 0, 0, 0.3)"
                    zIndex={'1'}
                    boxShadow={'0px 0px 7px 1px rgba(0,0,0,0.75)'}
                    backdropFilter="blur(1.5px)"
                    borderRadius={'25px'}
                    paddingTop={'20px'}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="80vh"
                    minWidth="100vh"
                    overflowY="auto"
                    position="fixed" >
                    {children}
                </Box>
            </Box>
        </SimpleSidebar>
    )
}
export default Layout