import Vara from "../../entidades/vara/vara.model";
import Visita from "../../entidades/visita/visita.model";
import Cidade from "../../entidades/cidade/cidade.model";
import Usuario from "../../entidades/usuario/usuario.model";
import Endereco from "../../entidades/endereco/endereco.model";
import Processo from "../../entidades/processo/processo.model";
import Prestador from "../../entidades/prestador/prestador.model";
import Instituicao from "../../entidades/instituicao/instituicao.model";
import Droga from "../../entidades/prestador/entidades/droga/droga.model";
import Curso from "../../entidades/prestador/entidades/curso/curso.model";
import Familiar from "../../entidades/prestador/entidades/familiar/familiar.model";
import Pergunta from "../../entidades/prestador/entidades/pergunta/pergunta.model";
import Resposta from "../../entidades/prestador/entidades/resposta/resposta.model";
import Trabalho from "../../entidades/prestador/entidades/trabalho/trabalho.model";
import UsoDroga from "../../entidades/prestador/entidades/uso-droga/uso-droga.model";
import Beneficio from "../../entidades/prestador/entidades/beneficio/beneficio.model";
import Habilidade from "../../entidades/prestador/entidades/habilidade/habilidade.model";
import UnidadeFederativa from "../../entidades/unidade-federativa/unidade-federativa.model";
import Deficiencia from "../../entidades/prestador/entidades/deficiencia/deficiencia.model";
import FichaMedica from "../../entidades/prestador/entidades/ficha-medica/ficha-medica.model";
import AgendamentoPrestacao from "../../entidades/agendamento-prestacao/agendamento-prestacao.model";
import PerfilPermissaoUsuario from "../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import AlternativaPenal from "../../entidades/prestador/entidades/alternativa-penal/alternativa-penal.model";

export const entidades: any[] = [
    UnidadeFederativa,
    Cidade,
    Deficiencia,
    Endereco,
    Instituicao,
    Usuario,
    Vara,
    Pergunta,
    Droga,
    Prestador,
    Processo,
    Visita,
    Resposta,
    FichaMedica,
    UsoDroga,
    Trabalho,
    AlternativaPenal,
    Beneficio,
    Curso,
    Habilidade,
    Familiar,
    PerfilPermissaoUsuario,
    AgendamentoPrestacao,
];