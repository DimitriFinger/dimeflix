import Movie from '../models/Movie'

class MovieService {
    async getAllMovies() {
        try {
            const getMovies = await Movie.find();
            return getMovies

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." }
        }

    }

    async getMovie(movieId) {
        try {
            const { id } = movieId;
            const movie = await Movie.findById(id);

            if (!movie) {
                return { message: 'Movie not found.' }
            }

            return movie;
        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }
    }


    async updateMovie(movieId, movieData) {
        try {
            const { id } = movieId;
            const { name, description, releaseYear, duration } = movieData;
            const movie = await Movie.findById(id);

            if (!movie) {
                return { message: 'Movie not found.' }
            }

            await movie.updateOne({ name, description, releaseYear, duration });

            return { message: 'Movie updated.' }

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }
    }


    async deleteMovie(movieId) {
        try {
            const { id } = movieId;
            const movie = await Movie.findById(id);

            if (!movie) {
                return { message: 'Movie not found.' }
            }

            await movie.deleteOne();
            return { message: 'Movie deleted.' }

        } catch (err) {
            return { error: "Internal server error." };
        }
    }

    async createMovie(movieData) {
        try {
            const { name, description, releaseYear, duration } = movieData;
            const movie = await Movie.findOne({ name });
            if (movie) {
                return { message: `Movie ${name} already exists.` }
            }
            const newMovie = await Movie.create({
                name,
                description,
                releaseYear,
                duration
            });

            return newMovie

        } catch (err) {
            console.log(err)
            return { error: 'There was a problem registering the user.' }
        }

    }

}

export default new MovieService();