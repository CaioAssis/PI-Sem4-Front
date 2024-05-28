import { Grid, GridItem, Flex, Box } from "@chakra-ui/react"
import  SimpleSidebar  from "../sidebar/index"
interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props
    return (
        <SimpleSidebar>
        <Box minHeight={'100vh'} backgroundSize={"cover"} backgroundRepeat="no-repeat" backgroundImage="url(https://www.deere.com.br/assets/images/region-3/products/harvesters/s-series/s760/r3g002593_colheitadeira_s760_campo_1_large_f312bb1da719e1a7196373ce1c8c6b7bd3cc165e.jpg)">
              {children}
        </Box>
        </SimpleSidebar>
    )
}
export default Layout