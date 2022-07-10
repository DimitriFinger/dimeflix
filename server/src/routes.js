import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = new Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser);
routes.get('/users/:id', UserController.getUser);
routes.put('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser);

routes.get('/movies', UserController.getAllUsers);
routes.post('/movies', UserController.createUser);
routes.get('/movies/:id', UserController.getUser);
routes.put('/movies/:id', UserController.updateUser)
routes.delete('/movies/:id', UserController.deleteUser);

routes.get('/series', UserController.getAllUsers);
routes.post('/series', UserController.createUser);
routes.get('/series/:id', UserController.getUser);
routes.put('/series/:id', UserController.updateUser)
routes.delete('/series/:id', UserController.deleteUser);


export default routes;