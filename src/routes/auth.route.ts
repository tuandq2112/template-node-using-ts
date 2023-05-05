import { LoginDTO } from '@/dtos/users.dto';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@/common/interface/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { Router } from 'express';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}login`, validationMiddleware(LoginDTO, 'body'), this.authController.login);
  }
}

export default AuthRoute;
