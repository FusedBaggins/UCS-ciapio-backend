import Deficiencia from "../entidades/prestador/entidades/deficiencia/deficiencia.model";
import UsoDroga from "../entidades/prestador/entidades/uso-droga/uso-droga.model";

interface FichaMedicaView {
    deficiencias: Deficiencia[];
    usoDrogas: UsoDroga[];
    fichaMedica: Record<string, any>;
}

export default FichaMedicaView;