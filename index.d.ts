import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { 
      nome: string,
      role: string,
     };
  }
}