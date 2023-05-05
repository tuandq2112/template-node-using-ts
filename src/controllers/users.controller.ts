import { BaseResponseController } from '@/common/controller/BaseResponseController';
import { RegisterDTO } from '@/dtos/users.dto';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
import { NextFunction, Response } from 'express';
import { Request } from 'express-serve-static-core';

class UsersController extends BaseResponseController {
  public userService = new userService();

  public registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const registerDTO: RegisterDTO = req.body;

      const data: User = await this.userService.register(registerDTO);
      this.response(res, data);
    } catch (error) {
      next(error);
    }
  };

  public getCurrentUserInformation = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data: User = await this.userService.getCurrentInformation(req.user);
      this.response(res, data);
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
