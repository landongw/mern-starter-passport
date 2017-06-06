import { Router } from 'express';
import authController from '../controllers/auth.controller';
const router = new Router();
export default function auth(passport) {
  const authCtrl = authController(passport);
  // Get all Posts
  router.route('/').get(authCtrl.isAuthenticated);

  // Get one post by cuid
  router.route('/login').get(authCtrl.login);

  // Add a new Post
  router.route('/signup').post(authCtrl.signup);


  return router;
}
