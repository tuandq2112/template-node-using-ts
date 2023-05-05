import { Response } from 'express';
import { ResponseMsg } from '../DTO/ResponseMsg';

export class BaseResponseController {
  public response(res: Response, data: any, code = 200, message = 'success') {
    const responseData = new ResponseMsg(code, message, data);
    res.status(200).json(responseData);
  }
}
