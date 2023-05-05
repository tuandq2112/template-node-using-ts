import { AuthException } from '@/common/exception/auth.exception';
import JwtService from '@/common/service/jwt.service';
import { RequestWithUser } from '@interfaces/auth.interface';
import UserModel from '@models/users.model';
import { NextFunction, Response } from 'express';

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null;

    if (Authorization) {
      const verificationResponse = JwtService.verifyToken(Authorization);

      const username = verificationResponse.username;
      const findUser = await UserModel.findOne({ username });

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(AuthException.invalidToken());
      }
    } else {
      next(AuthException.invalidToken());
    }
  } catch (error) {
    next(AuthException.invalidToken());
  }
};

export default authMiddleware;
