import { Request, Response, NextFunction } from 'express';
import Perfil from '../enums/perfil';

function authenticate(req: Request, res: Response, next: NextFunction) {
    req.session.user = {
        nome: 'Jorge',
        role: Perfil.UsuarioCIAP,
    };
    next();
}

export default authenticate;
