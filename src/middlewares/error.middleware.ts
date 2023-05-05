import { ResponseMsg } from '@/common/DTO/ResponseMsg';
import { HttpException } from '@/common/exception/http.exception';
import { logger } from '@utils/logger';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(error);

    const status: number = error.status || 500;
    let message: ResponseMsg = error.message;
    if (typeof message === 'string') {
      message = new ResponseMsg(500, message, null);
    }
    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${error.message}`);
    res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
