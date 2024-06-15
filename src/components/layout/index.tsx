import { Box } from "@chakra-ui/react"
import SimpleSidebar from "../sidebar/index"
import { useLocation } from "react-router-dom";

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props
    const location = useLocation();

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    return (
        <SimpleSidebar>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundSize={"cover"}
                backgroundRepeat="no-repeat"
                minHeight="100vh"
                minWidth="100vh"
                backgroundImage="url(https://www.deere.com.br/assets/images/region-3/products/harvesters/s-series/s760/r3g002593_colheitadeira_s760_campo_1_large_f312bb1da719e1a7196373ce1c8c6b7bd3cc165e.jpg)"
            >
                <Box
                    display={isHomePage ? 'none': 'block'}
                    maxHeight="80vh"
                    minHeight="80vh"
                    minWidth="100vh"
                    overflow="auto"
                    bg="rgba(0, 0, 0, 0.3)"
                    boxShadow={'0px 0px 7px 1px rgba(0,0,0,0.75)'}
                    backdropFilter="blur(1.5px)"
                    borderRadius={'25px'}
                    paddingTop={'20px'}>
                    <Box
                        
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        {children}
                    </Box>
                </Box>
            </Box>
        </SimpleSidebar>
    )
}
export default Layout