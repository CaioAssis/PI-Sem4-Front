import Layout from "../../components/layout"
import { Text } from "@chakra-ui/react"

export function Sobre(){
    return(
        <Layout>
            <div>
                <Text margin='5px'fontSize='30' textAlign='left'>
                    Sobre
                </Text>
                <Text margin='5px'fontSize='25' textAlign='left'>
                    Sistema de Vistoria de Máquinas
                </Text>
                <Text margin='5px'fontSize='20' textAlign='left'>
                    Sistema desenvolvido para auxiliar a padronização, distribuição e comparação de informações relacionadas ao estado de uma máquina específica, com o objetivo de indicar a etapa onde ocorreram avarias na mesma.
                </Text>
            </div>
        </Layout>
    )
}
export default Sobre