import session from 'express-session';
import { Request } from 'express';
import Usuario from './src/entidades/usuario/usuario.model';

declare module 'express-session' {
  export interface SessionData {
    passport: {
      user: string,
    }
  }
}

interface AuthenticatedRequest extends Request {
  user?: extendedUser;
  isAuthenticated: () => boolean;
}

interface extendedUser{
  user: Usuario;
  role: string;
}