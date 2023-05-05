import { BaseResponseController } from '@/common/controller/BaseResponseController';
import { RegisterDTO } from '@/dtos/users.dto';
import { UserException } from '@/exceptions/user.exception';
import { User } from '@interfaces/users.interface';
import UserModel from '@models/users.model';
import { hash } from 'bcrypt';

class UserService extends BaseResponseController {
  public userModel = UserModel;

  public async register(registerDTO: RegisterDTO): Promise<User> {
    const findUser = await this.userModel.findOne({ username: registerDTO.username });

    if (findUser) {
      UserException.usernameExisted();
    }
    const hashedPassword = await hash(registerDTO.password, 10);

    const newUser = await this.userModel.create({ ...registerDTO, password: hashedPassword });
    return newUser;
  }
  public async getCurrentInformation(user: User): Promise<User> {
    return await this.userModel.findOne({ username: user.username });
  }
}
export default UserService;
