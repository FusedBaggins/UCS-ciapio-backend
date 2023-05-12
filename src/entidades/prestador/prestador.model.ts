import Sequelize, { DataTypes, Model } from 'sequelize';

import Etnia from "../../enums/etnia";
import Visita from '../visita/visita.model';
import database from "../../database/database";
import Usuario from "../usuario/usuario.model";
import Endereco from "../endereco/endereco.model";
import Processo from '../processo/processo.model';
import EstadoCivil from "../../enums/estado-civil";
import Escolaridade from "../../enums/escolaridade";
import AlternativaPenal from './entidades/alternativa-penal/alternativa-penal.model';
import Beneficio from './entidades/beneficio/beneficio.model';
import Curso from './entidades/curso/curso.model';
import Familiar from './entidades/familiar/familiar.model';
import FichaMedica from './entidades/ficha-medica/ficha-medica.model';
import Habilidade from './entidades/habilidade/habilidade.model';
import Trabalho from './entidades/trabalho/trabalho.model';


export class Prestador extends Model {
    id!: number;
    nome!: string;
    cpf!: string;
    nome_mae?: string;
    dt_nascimento!: Date;
    estado_civil!: number;
    etnia!: Etnia;
    escolaridade!: Escolaridade;
    renda_familiar!: number;
    telefone1!: string;
    telefone2?: string;
    religiao?: string;
    image?: File;
    endereco!: Endereco;
    usuario!: Usuario;
}

Prestador.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false },
        cpf: { type: Sequelize.STRING, allowNull: false },
        nome_mae: { type: Sequelize.STRING, allowNull: true },
        dt_nascimento: { type: Sequelize.DATE, allowNull: false },
        estado_civil: {
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...Object.values(EstadoCivil)]],
            },
            allowNull: false,
        },
        etnia: {
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...Object.values(Etnia)]],
            },
            allowNull: false,
        },
        escolaridade: {
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...Object.values(Escolaridade)]],
            },
            allowNull: false,
        },
        renda_familiar: { type: Sequelize.FLOAT, allowNull: false },
        telefone1: { type: Sequelize.STRING, allowNull: false },
        telefone2: { type: Sequelize.STRING, allowNull: true },
        religiao: { type: Sequelize.STRING, allowNull: false },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },

    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'prestador'
    }
);

Prestador.hasMany(Processo, {
    foreignKey: 'prestadorId',
    as: 'processos'
});

Prestador.hasOne(FichaMedica, {
    foreignKey: 'prestadorId',
    as: 'fichaMedica'
});

Prestador.belongsTo(Endereco, { 
    foreignKey: 'enderecoId',
     as: 'endereco' 
});


Prestador.hasMany(Visita, {
    foreignKey: 'prestadorId',
    as: 'visitas'
});

Prestador.hasMany(Trabalho, {
    foreignKey: 'prestadorId',
    as: 'trabalhos'
});

Prestador.hasMany(AlternativaPenal, {
    foreignKey: 'prestadorId',
    as: 'alternativasPenais'
});


Prestador.hasMany(Beneficio, {
    foreignKey: 'prestadorId',
    as: 'beneficios'
});

Prestador.hasMany(Curso, {
    foreignKey: 'prestadorId',
    as: 'cursos'
});

Prestador.hasMany(Habilidade, {
    foreignKey: 'prestadorId',
    as: 'habilidades'
});

Prestador.hasMany(Familiar, {
    foreignKey: 'prestadorId',
    as: 'familiares'
});

Prestador.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    as: 'usuario'
});

export default Prestador;
