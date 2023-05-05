import { ResponseMsg } from '../DTO/ResponseMsg';
import { HttpException } from './http.exception';

export class AuthException extends HttpException {
  public static invalidToken(message = 'Invalid token') {
    const response = new ResponseMsg(401, message, null);
    return new AuthException(400, response);
  }
}
