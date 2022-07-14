import movieService from "../services/MovieService"

class MovieController {
    async createMovie(req, res) {
        try {
            const movie = await movieService.createMovie(req.body);
            return res.status(201).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }

    async getAllMovies(req, res) {
        try {
            const movie = await movieService.getAllMovies();
            return res.status(200).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });

        }
    }

    async getMovie(req, res) {
        try {
            const movie = await movieService.getMovie(req.params);
            return res.status(200).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async deleteMovie(req, res) {
        try {
            const deletedMovie = await movieService.deleteMovie(req.params);
            return res.status(200).json(deletedMovie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async updateMovie(req, res) {
        try {
            const movie = await movieService.updateMovie(req.params, req.body);
            return res.status(200).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }
}


export default new MovieController();

