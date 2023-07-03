import { Request, Response } from "express";
import Prestador from "./prestador.model";
import PrestadorService from "../../services/prestadorService";
import Pergunta from "./entidades/pergunta/pergunta.model";
import Droga from "./entidades/droga/droga.model";
import { Op, Sequelize } from "sequelize";
import { AuthenticatedRequest } from "../../..";
import Resposta from "./entidades/resposta/resposta.model";
import FichaMedica from "./entidades/ficha-medica/ficha-medica.model";
import Deficiencia from "./entidades/deficiencia/deficiencia.model";
import UsoDroga from "./entidades/uso-droga/uso-droga.model";

const _getListFilters = (req: Request) =>
({
    ...(req.query.nome && {
        nome: { [Op.iLike]: `%${req.query.nome}%` }
    }),
});
export default {
    async list(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Prestador[] = await Prestador.findAll({
            where: {
                ..._getListFilters(req),
                instituicaoId: req?.user?.user.instituicaoId,
            }
        });
        return res.status(200).json(entidades);
    },

    async listSelect(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Prestador[] = await Prestador.findAll({
            where: {
                instituicaoId: req?.user?.user.instituicaoId,
            },
            attributes: ['id', 'nome'],
        });

        return res.status(200).json(entidades.map(entidade => ({
            id: entidade.id,
            label: entidade.nome
        })));
    },

    async detail(req: AuthenticatedRequest, res: Response): Promise<any> {
        let entidade: Prestador | null = await Prestador.findByPk(req.params.id, {
            include: [
                'habilidades',
                'familiares',
                'cursos',
                'beneficios',
                'alternativasPenais',
                'trabalhos',
                'visitas',
                {
                    model: FichaMedica,
                    as: 'fichaMedica',
                    include: [
                        {
                            model: Deficiencia,
                            as: 'deficiencias',
                        },
                        {
                            model: UsoDroga,
                            as: 'usoDrogas',
                        },
                    ],
                },
                'processos',
                'endereco',
                {
                    model: Resposta,
                    as: 'respostas',
                    include: [
                        {
                            model: Pergunta,
                            as: 'pergunta',
                            attributes: ['pergunta'],
                        },
                    ],
                },
            ],
        });

        let perguntas = await Pergunta.findAll({
            where: {
                ativo: true,
                ...(req?.user?.user?.instituicaoId &&
                    { instituicaoId: req.user.user.instituicaoId }
                ),
            }
        });

        let drogas = await Droga.findAll();

        if (entidade) {
            return res.status(200).json({ entidade, perguntas, drogas });
        }

        return res.status(404).json({});
    },
    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            req.body.usuarioId = req?.user?.user.id;
            req.body.instituicaoId = req?.user?.user?.instituicaoId;
            const { entidade } = await PrestadorService.salvarComDependencias(req.body);
            return res.status(200).json({
                id: entidade.id,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}