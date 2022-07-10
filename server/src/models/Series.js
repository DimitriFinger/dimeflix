import mongoose from "mongoose";

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    description: {
        type: String,
        required: true
    },
    numberOfSeasons: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    episodeDuration: {
        type: Number,
    }

}, {
    timestamps: true
});

export default mongoose.model('Series', SerieSchema);