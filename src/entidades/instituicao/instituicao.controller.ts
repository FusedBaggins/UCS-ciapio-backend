import { Request, Response } from "express";
import Instituicao from "./instituicao.model";
import TipoInstituicao from "../../enums/tipo-instituicao";
import InstituicaoService from "../../services/instituicaoService";
import { AuthenticatedRequest } from "../../..";
import InstituicaoVinculo from "./Instituicao-vinculo.model";
import InstituicaoValidate from "../../helpers/validations/instituicaoParceiraValidate";

export default {
    async list(req: Request, res: Response): Promise<any> {
        let entidades: Instituicao[] = await Instituicao.findAll();
        return res.status(200).json(entidades);
    },

    async listCIAP(req: Request, res: Response): Promise<any> {
        let entidade = await Instituicao.findAll({
            where: {
                tipo_instituicao: TipoInstituicao.Ciap,
            }
        });

        if (entidade)
            return res.status(200).json(entidade);
        return res.status(404).json({});
    },

    async listInstituicaoParceira(req: AuthenticatedRequest, res: Response): Promise<any> {
        let entidade = await InstituicaoVinculo.findAll({
            where: {
                instituicaoPaiId: req.user?.user?.instituicaoId,
            },
            include: [
                'instituicaoParceira',
            ],
            attributes: [],
        });

        if (entidade)
            return res.status(200).json(
                entidade.map((entidade) => entidade['instituicaoParceira'])
            );
        return res.status(404).json({});
    },

    async detail(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            let entidade = await Instituicao.findByPk(req.params.id, {
                include: [
                    'endereco',
                ],
            });
            if (entidade) {
                await InstituicaoValidate.validarInstituicaoDetail(entidade, req)
                return res.status(200).json(entidade);
            }
            return res.status(404).json({});
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error).send();
        }
    },

    async listSelect(req: AuthenticatedRequest, res: Response): Promise<any> {
        let entidade = await InstituicaoVinculo.findAll({
            where: {
                instituicaoPaiId: req.user?.user?.instituicaoId,
            },
            include: [
                'instituicaoParceira',
            ],
            attributes: [],
        });

        if (entidade) {
            const instituicoes = entidade.map((entidade) => ({
                id: entidade['instituicaoParceira'].id,
                label: entidade['instituicaoParceira'].nome,
            }));

            return res.status(200).json(
                instituicoes
            );
        }
        return res.status(404).json({});
    },

    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            const { entidade } = await InstituicaoService.salvarComDependencias(req.body, req.user?.user);
            return res.status(200).json({ id: entidade?.id });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}