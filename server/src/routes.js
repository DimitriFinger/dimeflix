import { Router } from "express";
import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";

const routes = new Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser);
routes.get('/users/:id', UserController.getUser);
routes.put('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser);

routes.get('/movies', MovieController.getAllMovies);
routes.post('/movies', MovieController.createMovie);
routes.get('/movies/:id', MovieController.getMovie);
routes.put('/movies/:id', MovieController.updateMovie)
routes.delete('/movies/:id', MovieController.deleteMovie);

routes.get('/series', UserController.getAllUsers);
routes.post('/series', UserController.createUser);
routes.get('/series/:id', UserController.getUser);
routes.put('/series/:id', UserController.updateUser)
routes.delete('/series/:id', UserController.deleteUser);


export default routes;