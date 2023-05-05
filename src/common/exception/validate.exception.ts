import { ResponseMsg } from '../DTO/ResponseMsg';
import { HttpException } from './http.exception';

export class ValidateException extends HttpException {
  public static ERROR_CODE = 200;

  public static invalidInput(message: string) {
    const response = new ResponseMsg(this.ERROR_CODE + 1, message, null);
    return new ValidateException(400, response);
  }
}
