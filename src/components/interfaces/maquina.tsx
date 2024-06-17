import { Cliente } from "./cliente"
import { ModuloDescricao } from "./moduloDescricao"
import { Vistoria } from "./vistoria"


export interface Maquina {
    id: number
    descricao: string
    vistorias: number[]
    cliente: Cliente
    modulos: number[]
}

export type maquinaGet = {
    id: number
    descricao: string
    vistorias: Vistoria[]
    cliente: Cliente
    modulosDescricao: ModuloDescricao[]
}