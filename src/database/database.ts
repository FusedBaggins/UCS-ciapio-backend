import Sequelize from 'sequelize';

import options from './options';
import Vara from '../entidades/vara/vara.model';
import Cidade from '../entidades/cidade/cidade.model';
import Usuario from '../entidades/usuario/usuario.model';
import Endereco from '../entidades/endereco/endereco.model';
import Processo from '../entidades/processo/processo.model';
import Prestador from '../entidades/prestador/prestador.model';
import Instituicao from '../entidades/instituicao/instituicao.model';
import UnidadeFederativa from '../entidades/unidade-federativa/unidade-federativa.model';
import PerfilPermissaoUsuario from '../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model';
import AtestadoComparecimento from '../entidades/atestado-comparecimento/atestado-comparecimento.model';
import Visita from '../entidades/visita/visita.model';
import AgendamentoPrestacao from '../entidades/agendamento-prestacao/agendamento-prestacao.model';
import FichaMedica from '../entidades/prestador/entidades/ficha-medica/ficha-medica.model';
import Droga from '../entidades/prestador/entidades/droga/droga.model';
import UsoDroga from '../entidades/prestador/entidades/uso-droga/uso-droga.model';
import Deficiencia from '../entidades/prestador/entidades/deficiencia/deficiencia.model';
import Trabalho from '../entidades/prestador/entidades/trabalho/trabalho.model';
import AlternativaPenal from '../entidades/prestador/entidades/alternativa-penal/alternativa-penal.model';
import Beneficio from '../entidades/prestador/entidades/beneficio/beneficio.model';
import Curso from '../entidades/prestador/entidades/curso/curso.model';
import Pergunta from '../entidades/prestador/entidades/pergunta/pergunta.model';
import Resposta from '../entidades/prestador/entidades/resposta/resposta.model';

class Database {
    connection!: Sequelize.Sequelize;

    constructor() {
        this.connection = new Sequelize.Sequelize(options);
    }
}

export default new Database();