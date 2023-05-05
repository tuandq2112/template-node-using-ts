import App from '@/app';
import AuthRoute from '@routes/auth.route';
import UserRoute from '@/routes/users.route';
import validateEnv from '@utils/validateEnv';
import UploadRoute from './routes/upload.route';

validateEnv();

const app = new App([
  //new IndexRoute(),
  new UserRoute(),
  new AuthRoute(),
  new UploadRoute(),
]);

app.listen();
