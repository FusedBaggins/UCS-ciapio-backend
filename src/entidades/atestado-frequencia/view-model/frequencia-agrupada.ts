import Prestador from "../../prestador/prestador.model";
import { AtestadoFrequencia } from "../atestado-frequencia.model";

export class FrequenciaAgrupada {
    public id!: number;
    public atestadosFrequencia?: AtestadoFrequencia[];
    public prestador!: Prestador;
    public horas_cumprir!: number;

    constructor(id: number, prestador: Prestador, horas_cumprir: number, atestadosFrequencia?: AtestadoFrequencia[]) {
        this.id = id;
        this.prestador = prestador;
        this.horas_cumprir = horas_cumprir;
        this.atestadosFrequencia = atestadosFrequencia;
    }
}