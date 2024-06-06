import { ModuloDescricao } from "../interfaces/moduloDescricao";
import ImageExample from "./img-example";
import BaseImage2 from "./img-examplecopy";

const MockModulos: ModuloDescricao[] = [
    { id: 1, titulo: 'Tipo de vistoria', descricao: 'Descrever o tipo de vistoria', imagem: BaseImage2 },
    { id: 2, titulo: 'Conferir lataria', descricao: 'Conferir estado da lataria da máquina', imagem: '' },
    { id: 3, titulo: 'Conferir vidros', descricao: 'Conferir estado dos vidros e espelhos da máquina', imagem: ImageExample },
    { id: 4, titulo: 'Conferir esteiras', descricao: 'Procurar defeitos nas esteiras da máquina', imagem: '' },
    { id: 5, titulo: 'Conferir rodas', descricao: 'Procurar defeiros nas rodas das máquinas', imagem: '' },
  ];
export default MockModulos
