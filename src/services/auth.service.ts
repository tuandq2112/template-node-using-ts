import { LoginDTO } from '@/dtos/users.dto';
import { UserException } from '@/exceptions/user.exception';
import UserModel from '@models/users.model';
import { compare } from 'bcrypt';
import JwtService from '../common/service/jwt.service';

class AuthService {
  public model = UserModel;

  public async login(loginDTO: LoginDTO): Promise<any> {
    const findUser = await this.model.findOne({ username: loginDTO.username });
    if (!findUser) {
      UserException.userNotFound();
    }

    const userPassword = findUser.password;

    const isVerify = await compare(loginDTO.password, userPassword);

    if (!isVerify) {
      UserException.passwordNotMatch();
    }
    const jwtData = findUser.toJSON();
    const ignoreFields = ['password'];
    for (const i of ignoreFields) {
      delete jwtData[i];
    }
    const res = JwtService.generateToken(jwtData);

    return { ...res, ...jwtData };
  }
}

export default AuthService;
