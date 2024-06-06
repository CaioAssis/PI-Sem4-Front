import { Vistoria } from "../../../interfaces/vistoria";
import BaseImage2 from "../../../pdf/img-examplecopy";

const MockVist: Vistoria[] = [
    { id: 1, data: '', anexo: BaseImage2, status: 'OK', maquina: 1, moduloInspecao: [] },
    { id: 2, data: '', anexo: BaseImage2, status: 'OK', maquina: 1, moduloInspecao: [] },
    { id: 3, data: '', anexo: BaseImage2, status: 'OK', maquina: 3, moduloInspecao: [] },
    { id: 4, data: '', anexo: BaseImage2, status: 'OK', maquina: 2, moduloInspecao: [] },
    { id: 5, data: '', anexo: BaseImage2, status: 'OK', maquina: 4, moduloInspecao: [] },
    { id: 6, data: '', anexo: BaseImage2, status: 'OK', maquina: 3, moduloInspecao: [] }
  ];
export default MockVist