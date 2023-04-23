import Sequelize, { DataTypes, Model } from 'sequelize';
import database from "../../database/database";
import Etnia from "../../enums/etnia";
import Escolaridade from "../../enums/escolaridade";
import EstadoCivil from "../../enums/estado-civil";
import Endereco from "../endereco/endereco.model";
import Usuario from "../usuario/usuario.model";
import Processo from '../processo/processo.model';
import { FichaMedica } from '../ficha-medica/ficha-medica.model';
import { Trabalho } from '../trabalho/trabalho.model';


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
                isIn: [[...Object.values(Escolaridade)]],
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

export default Prestador;
