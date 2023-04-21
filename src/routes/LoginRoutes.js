import { Router } from 'express';
import { Login } 
from '../controllers/LoginController';

const LoginRouter = Router();

LoginRouter.post('/', Login);

export default LoginRouter;

