import { Request } from 'express';
import { User } from '../../interfaces/users.interface';

export interface RequestWithUser extends Request {
  user: User;
}
