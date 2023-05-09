import Perfil from '../enums/perfil';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import UsuarioService from '../helpers/services/usuarioService';
import bcrypt from 'bcryptjs';

class Authenticate {
  static async initAuthenticateMethods() {
    passport.use(new LocalStrategy(async (username, password, done) => {
      const user = await UsuarioService.getUsuarioByNome(username);
      console.log(username);
      if (user) {
        bcrypt.compare(password, user.hash, (err, res) => {
          if (res) {
            this.serializeUser();
            this.deserializeUser();
            done(null, user);
          } else {
            return done(null, false, { message: 'Credenciais inválidas!' });
          }
        });
      }
    }));
  }

  static serializeUser() {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });
  }

  static deserializeUser() {
    passport.deserializeUser(async (id: string, done) => {
      const user = await UsuarioService.getById(id);
      if(user){
        const perfil = await UsuarioService.getPerfilByUsuarioId(user!.id);
        done(null, {
          user,
          role: perfil?.perfil ? Perfil[perfil.perfil] : Perfil.deslogado,
        });
        return;
      }
      done(null, user);
    });
  }
}

export default Authenticate;
