import seriesService from "../services/SeriesService"


class SeriesController {
    async createSerie(req, res) {
        try {
            const serie = await seriesService.createSerie(req.body);
            return res.status(201).json(serie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }

    async getAllSeries(req, res) {
        try {
            const series = await seriesService.getAllUsers();
            return res.status(200).json(series);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });

        }
    }

    async getSerie(req, res) {
        try {
            const serie = await seriesService.getUser(req.params);
            return res.status(200).json(serie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async deleteSerie(req, res) {
        try {
            const serie = await seriesService.deleteUser(req.params);
            return res.status(200).json(serie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }

    async updateSerie(req, res) {
        try {
            const serie = await seriesService.updateUser(req.params, req.body);
            return res.status(200).json(serie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }
    }
}

export default new SeriesController();