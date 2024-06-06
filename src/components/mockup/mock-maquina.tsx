import { Maquina } from "../interfaces/maquina";


const MockMaquinas: Maquina[] = [
    { id: 1, descricao: '100001', modulos: [1, 2, 3], vistorias: [1, 2] },
    { id: 2, descricao: '100002', modulos: [1, 5, 3], vistorias: [4] },
    { id: 3, descricao: '100003', modulos: [1, 5, 2], vistorias: [3, 6] },
    { id: 4, descricao: '100004', modulos: [1, 4, 1], vistorias: [5] },
    { id: 5, descricao: '100005', modulos: [1, 4], vistorias: [] }
]

export default MockMaquinas