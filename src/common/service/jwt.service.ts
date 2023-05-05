import { DURATION, KEY_PAIR } from '@/config';
import jsonwebtoken from 'jsonwebtoken';
import moment from 'moment';
const { PRIVATE_KEY, PUBLIC_KEY } = KEY_PAIR;
class JwtService {
  public static generateToken(tokenInfo: Object) {
    const token = jsonwebtoken.sign(tokenInfo, PRIVATE_KEY, { algorithm: 'RS256', expiresIn: Number(DURATION) });
    return { token, expiresIn: moment.unix(moment().unix() + Number(DURATION)).format() };
  }

  public static verifyToken(token: string): any {
    return jsonwebtoken.verify(token, PUBLIC_KEY) as any;
  }
}
export default JwtService;
