import { ModuloInspecao } from "./moduloInspecao"

export interface Vistoria{
    id: number
    data: string
    anexo: string
    status: string
    maquina: number
    moduloInspecao: ModuloInspecao[]
}