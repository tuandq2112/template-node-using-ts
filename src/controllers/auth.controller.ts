import { BaseResponseController } from '@/common/controller/BaseResponseController';
import { LoginDTO } from '@/dtos/users.dto';
import AuthService from '@services/auth.service';
import { NextFunction, Request, Response } from 'express';

class AuthController extends BaseResponseController {
  public authService = new AuthService();
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginDTO: LoginDTO = req.body;
      const data = await this.authService.login(loginDTO);

      this.response(res, data);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
