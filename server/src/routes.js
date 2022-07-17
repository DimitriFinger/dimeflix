import { Router } from "express";
import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";
import SeriesController from "./controllers/SeriesController";

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

routes.get('/series', SeriesController.getAllSeries);
routes.post('/series', SeriesController.createSerie);
routes.get('/series/:id', SeriesController.getSerie);
routes.put('/series/:id', SeriesController.updateSerie)
routes.delete('/series/:id', SeriesController.deleteSerie);


export default routes;