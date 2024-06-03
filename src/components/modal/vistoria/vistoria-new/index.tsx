import { Box, Button, Checkbox, Divider, Text, Grid, GridItem } from '@chakra-ui/react';
import { Maquina } from '../../../interfaces/maquina';
import { ChangeEvent, useEffect, useState } from 'react';
import MockModulos from './mock-modulo';
import ModalTextarea from '../../modal-textarea';
import ModalInputImage from '../../modal-input-image';
import { ModuloInspecao } from '../../../interfaces/moduloInspecao';

interface MaquinaProps {
    maq: Maquina
    onClose: () => void
}

export function VistoriaNew({ maq, onClose }: MaquinaProps) {

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
            
            console.log(vistImg)
            //console.log(base64String) //
          };
          reader.readAsDataURL(file);
         
        }
    };


    /*<Box>
                                <Box>{imagem != '' && (<img src={imagem}
                        alt="" height="200px" width="200px" />)}
                    </Box>
                        <ModalInputImage
                            title="Upload de Imagem"
                            onChange={handleFileChange}
                        />
                                </Box> */







    return (
        <>
            <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                <GridItem colSpan={6}>
                    {maq.modulos.map((modulo, index) => (
                        <Box marginBottom='20px' w=''>

                            <ModalTextarea
                                title={MockModulos[modulo - 1].titulo}
                                placeholder={MockModulos[modulo - 1].descricao}
                                imagem={MockModulos[modulo - 1].imagem}
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

                            <Box display='flex' alignItems='start' >
                                <Checkbox
                                    mt='5px'
                                    mb='5px'
                                    mr='5px'
                                    colorScheme='green'
                                    size='lg' />
                                <Text alignSelf='center'>OK</Text>
                            </Box>

                            <Divider />
                        </Box>

                    ))}
                </GridItem>
                <GridItem colSpan={5} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3} justifySelf="end">
                    <Button onClick={onClose}>Criar Vistoria</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf="end">
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>
            </Grid>
        </>
    )
}
export default VistoriaNew