import { Button, Divider, Grid, GridItem } from '@chakra-ui/react';
import ModalInput from '../../modal-input';
import { ModuloDescricao } from '../../../interfaces/moduloDescricao';
import { useState } from 'react';
import ModalInputImage from '../../modal-input-image';

interface ModuloProps {
    modulo: ModuloDescricao
    onClose: () => void
}

export function UpdateModuloForm({ modulo, onClose }: ModuloProps) {

    function editModulo() {
        if (titulo != '' && descricao != '' && imagem != '') {
            const newModulo = {
                titulo: titulo,
                descricao: descricao,
                imagem: imagem
            }

            console.log(newModulo.titulo)
            onClose()

        }
        else alert('Os campos precisam estar preenchidos!')
    }

    const [titulo, setTitulo] = useState(modulo.titulo)
    const [descricao, setDescricao] = useState(modulo.descricao)
    const [imagem, setImagem] = useState(modulo.imagem)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setSelectedFile(files[0]);
        }
    };

    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>

                <GridItem colSpan={3}>
                    <ModalInput
                        title='Nome'
                        placeholder='Nome do módulo'
                        onChange={(evento) => setTitulo(evento.target.value)}
                        defaultValue={modulo.titulo} />
                </GridItem>

                <GridItem colSpan={2}>
                    <ModalInput
                        title='Descrição'
                        placeholder='Descrição do módulo'
                        defaultValue={modulo.descricao}
                        onChange={(evento) => setDescricao(evento.target.value)} />
                </GridItem>

                <GridItem colSpan={2} mb={3}>
                    <ModalInputImage
                        title="Upload de Imagem"
                        onChange={handleFileChange}
                    />
                </GridItem>

                <GridItem colSpan={1} mb={3}>
                    <Divider />
                </GridItem>

                <GridItem colSpan={3} justifySelf='end'>
                    <Button onClick={editModulo}>Criar Módulo</Button>
                </GridItem>

                <GridItem colSpan={2} justifySelf='end'>
                    <Button onClick={onClose}>Cancelar</Button>
                </GridItem>

            </Grid>
        </>
    )
}
export default UpdateModuloForm