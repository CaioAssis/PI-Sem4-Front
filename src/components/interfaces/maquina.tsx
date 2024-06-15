import { ModuloDescricao } from "./moduloDescricao"
import { Vistoria } from "./vistoria"


export interface Maquina {
    id: number
    descricao: string
    vistorias: number[]
    modulos: number[]
}

export type maquinaGet = {
    id: number
    descricao: string
    vistorias: Vistoria[]
    modulosDescricao: ModuloDescricao[]
}