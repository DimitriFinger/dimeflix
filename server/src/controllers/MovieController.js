import movieService from "../services/MovieService"

class MovieController {
    async createMovie(req, res) {
        try {
            const movie = await userService.createUser(req.body);
            return res.status(201).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });

        }
    }

    async getUser(req, res) {
        try {
            const user = await userService.getUser(req.params);
            return res.status(200).json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async deleteUser(req, res) {
        try {
            const deleteUser = await userService.deleteUser(req.params);
            return res.status(200).json(deleteUser);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userService.updateUser(req.params, req.body);
            return res.status(200).json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }
}


export default new MovieController();

