import { Grid, GridItem } from "@chakra-ui/react"

interface Props{
    children: React.ReactNode
}

function Layout(props: Props){
    const {children} = props
    return(
        <Grid className='grid' templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem colSpan={1} rowSpan={1}>
                Topo
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
                {children}
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
                Rodape
            </GridItem>
        </Grid>
    )
}
export default Layout