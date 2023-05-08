import { NextFunction } from 'express';
import { Request, Response } from 'express';

function authenticationValidate(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated() || req.path.includes('/login') || (req.path.includes('/usuario') && (req.method === "POST" || req.method === "PUT"))) {
      return next();
    }
    res.redirect('/login');
  }

export default authenticationValidate;