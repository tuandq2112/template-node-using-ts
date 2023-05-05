import { RegisterDTO } from '@/dtos/users.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

class UserRoute implements Routes {
  public path = '/user';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(RegisterDTO, 'body'), this.usersController.registerUser);
    this.router.get(`${this.path}/me`, authMiddleware, this.usersController.getCurrentUserInformation);
  }
}

export default UserRoute;
