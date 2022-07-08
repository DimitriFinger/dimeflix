import Movie from '../models/Movie'

class MovieService {
    async getAll(req, res) {
        try {
            const getMovies = await Movie.find();
            return res.json(getMovies);

        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }

    }

    async getId(req, res) {
        try {
            const { id } = req.params;
            const movie = await Movie.findById(id);

            if (!movie) {
                return res.status(404).json();
            }

            return res.json(movie);
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }


    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, description, releaseYear, duration } = req.body;
            const movie = await Movie.findById(id);

            if (!movie) {
                return res.status(404).json();
            }

            await movie.updateOne({ name, description, releaseYear, duration });

            return res.status(200).json();

        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }


    async delete(req, res) {
        try {
            const { id } = req.params;
            const movie = await Movie.findById(id);

            if (!movie) {
                return res.status(404).json();
            }

            await movie.deleteOne();
            return res.status(200).json();

        } catch (err) {
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }

    async create(req, res) {
        try {
            const { name, description, releaseYear, duration } = req.body;
            const movie = await movie.findOne({ name });

            if (movie) {
                return res
                    .status(422)
                    .json({ message: `Movie ${name} already exists.` });
            }
            const newMovie = await Movie.create({
                name,
                description,
                releaseYear,
                duration
            });

            return res
                .status(201)
                .json(newMovie);

        } catch (err) {
            return res
                .status(500)
                .json('There was a problem registering the user.');
        }

    }

}

export default new MovieService();