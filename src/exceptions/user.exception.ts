import { ResponseMsg } from '@/common/DTO/ResponseMsg';
import { HttpException } from '@/common/exception/http.exception';

export class UserException extends HttpException {
  public static ERROR_CODE = 1000;

  public static usernameExisted() {
    const response = new ResponseMsg(this.ERROR_CODE + 1, 'Username existed', null);

    throw new UserException(200, response);
  }

  public static userNotFound() {
    const response = new ResponseMsg(this.ERROR_CODE + 2, 'Username not found', null);

    throw new UserException(200, response);
  }

  public static passwordNotMatch() {
    // ERR003
    const response = new ResponseMsg(this.ERROR_CODE + 3, 'Invalid password', null);

    throw new UserException(200, response);
  }
}
