import Sequelize, { DataTypes, Model } from 'sequelize';

import Etnia from "../../enums/etnia";
import Curso from '../curso/curso.model';
import database from "../../database/database";
import Usuario from "../usuario/usuario.model";
import Endereco from "../endereco/endereco.model";
import Trabalho from '../trabalho/trabalho.model';
import Processo from '../processo/processo.model';
import EstadoCivil from "../../enums/estado-civil";
import Escolaridade from "../../enums/escolaridade";
import Beneficio from '../beneficio/beneficio.model';
import Habilidade from '../habilidade/habilidade.model';
import FichaMedica from '../ficha-medica/ficha-medica.model';
import AlternativaPenal from '../alternativa-penal/alternativa-penal.model';


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

Processo.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

FichaMedica.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

Trabalho.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

AlternativaPenal.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

Beneficio.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

Curso.belongsTo(Prestador, {
    foreignKey: 'prestadorId',
    as: 'prestador'
});

Habilidade.belongsTo(Prestador, {
    foreignKey: 'prestaodorId',
    as: 'prestador'
});

export default Prestador;
