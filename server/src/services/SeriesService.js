import Series from '../models/Series'

class SeriesService {
    async getAllSeries(req, res) {
        try {
            const getSeries = await Series.find();
            return getSeries;

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }

    }

    async getSerie(serieData) {
        try {
            const { id } = serieData;
            const serie = await Series.findById(id);

            if (!serie) {
                return { message: 'Serie not found.' }
            }

            return serie;
        } catch (err) {
            console.error(err);
            return { error: "Invalid ID value." }
        }
    }


    async updateSerie(serieId, serieData) {
        try {
            const { id } = serieId;
            const { name, description, gender, numberOfSeasons, releaseYear, episodeDuration } = serieData;
            const serie = await Series.findById(id);

            if (!serie) {
                return { message: 'Serie not found.' }
            }

            await Series.updateOne({ name, description, gender, numberOfSeasons, releaseYear, episodeDuration });

            return { message: 'Serie updated.' }

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." };
        }
    }


    async deleteSerie(serieData) {
        try {
            const { id } = serieData;
            const serie = await Series.findById(id);

            if (!serie) {
                return { message: 'Serie not found.' }
            }

            await Series.deleteOne();
            return { message: 'Serie deleted.' }

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." }
        }
    }

    async createSerie(userData) {
        try {
            const { name, description, gender, numberOfSeasons, releaseYear, episodeDuration } = userData;
            const serie = await Series.findOne({ name });

            if (serie) {
                return { message: `Serie ${name} already exists.` };
            }
            const newSerie = await Series.create({
                name,
                description,
                gender,
                numberOfSeasons,
                releaseYear,
                episodeDuration
            });

            return newSerie

        } catch (err) {
            console.error(err);
            return { error: "Internal server error." }
        }

    }

}

export default new SeriesService();