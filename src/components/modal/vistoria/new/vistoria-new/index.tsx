import { Box, Button, Checkbox, Divider, Text, Grid, GridItem } from '@chakra-ui/react';
import { Maquina } from '../../../../interfaces/maquina';
import { ChangeEvent, useState } from 'react';
import ModalTextarea from '../../../modal-textarea';
import ModalInputImage from '../../../modal-input-image';
import { ModuloDescricao } from '../../../../interfaces/moduloDescricao';
import { Vistoria } from '../../../../interfaces/vistoria';
//import api from '../../../../../helpers/axios';
import CreatePdf64 from '../../../../pdf/pdf-to-b64';

interface MaquinaProps {
    maq: Maquina
    onClose: () => void
    modulos: ModuloDescricao[]
}

export function VistoriaNew({ maq, onClose, modulos }: MaquinaProps) {
    const [vistDesc, setVistDesc] = useState<string[]>([])
    const handleTextareaChange = (index: number, event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValues = [...vistDesc]
        newValues[index] = event.target.value
        setVistDesc(newValues)
        console.log(vistDesc)
    };
    const [vistImg, setVistImg] = useState<string[]>([])
    const handleImageChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        const newValues = [...vistImg]
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                newValues[index] = base64String
                setVistImg(newValues);
                //console.log(vistImg)
                //console.log(base64String)
            };
            reader.readAsDataURL(file);

        }
    };
    const [vistChck, setVistChck] = useState<boolean[]>([])
    const handleCheckboxChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newValues = [...vistChck]
        newValues[index] = event.target.checked
        setVistChck(newValues)
        console.log(vistChck)
    }

    const [vistoria, setVistoria] = useState<Vistoria>()

    function addVist() {
        const inspMod = maq.modulos.map((item, index) => ({

            status: vistChck[index] ? vistChck[index] : vistChck[index] = false,
            descricao: vistDesc[index] ? vistDesc[index] : vistDesc[index] = '',
            imagem: vistImg[index] ? vistImg[index] : vistImg[index] = '',
            moduloDescricao: item

        }))
        //setInspecao(inspMod)
        const data = new Date()
        var mStatus: string = 'OK'
        for (let i: number = 0; i < inspMod.length; i++) {
            if (inspMod[i].status == true || inspMod[i].imagem != '' || inspMod[i].descricao != '') {
                if (!inspMod[i].status) mStatus = 'NOK'
            }
            else return alert('Existem campos que precisam ser preenchidos!')
        }


        setVistoria({
            id: 0,
            data: data.toISOString(),
            anexo: '',
            status: mStatus,
            maquina: maq.id,
            moduloInspecao: inspMod
        })

        console.log(vistoria)
        if (vistoria) return (
            <CreatePdf64 vistoria={vistoria} />
        )

        //   api.post(`/cliente/save`, newClient)
        //   .then(()=>onClose())
        //   .catch((e)=>console.log("Erro: " + e))

    }
    //function onClosed(){ console.log(vistoria)}
    return (
        <>
            <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                <GridItem colSpan={6}>
                    {maq.modulos.map((modulo, index) => (
                        <Box marginBottom='20px' w=''>
                            <Text fontSize='20' marginRight='10px'>{modulos[modulo - 1].titulo}</Text>
                            <Box display='flex' alignItems='start' >
                                <Checkbox
                                    mt='5px'
                                    mb='5px'
                                    mr='5px'
                                    colorScheme='green'
                                    size='lg'
                                    onChange={(event) => handleCheckboxChange(index, event)} />
                                <Text alignSelf='center'>OK</Text>
                            </Box>
                            <ModalTextarea
                                placeholder={modulos[modulo - 1].descricao}
                                imagem={modulos[modulo - 1].imagem}
                                onChange={(event) => handleTextareaChange(index, event)} />

                            <Box>
                                <Box>{vistImg[index] != '' && (<img src={vistImg[index]}
                                    alt="" height="200px" width="200px" />)}
                                </Box>
                                <ModalInputImage
                                    title="Upload de Imagem"
                                    onChange={(event) => handleImageChange(index, event)}
                                />
                            </Box>

                            <Divider />
                        </Box>

                    ))}
                </GridItem>
                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3} justifySelf="end">
                    <Button onClick={addVist}>Criar Vistoria</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf="end">
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>
            </Grid>
        </>
    )
}
export default VistoriaNew