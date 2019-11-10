import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guibson Arcebispo',
    email: 'guibsonarc@gmail.com',
    password_hash: '214fwtgt3t34t22341313f',
  });

  return res.json(user);
});

export default routes;
