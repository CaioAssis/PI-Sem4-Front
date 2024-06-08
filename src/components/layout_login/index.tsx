import { Grid, GridItem } from "@chakra-ui/react"
interface Props {
    children: React.ReactNode
}

function LayoutLogin(props: Props) {
    const { children } = props
    return (
        <Grid className='grid' templateColumns='auto auto auto' templateRows='auto'minHeight={'100vh'} backgroundSize={"cover"} backgroundRepeat="no-repeat" backgroundImage="url(https://www.deere.com.br/assets/images/region-3/products/harvesters/s-series/s760/r3g002593_colheitadeira_s760_campo_1_large_f312bb1da719e1a7196373ce1c8c6b7bd3cc165e.jpg)">
      
          <GridItem colSpan={5} rowSpan={2}>

          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
              {children}
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
              
          </GridItem> 
        </Grid>
    )
}
export default LayoutLogin