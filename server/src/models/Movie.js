import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
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
    releaseYear: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model('Movies', MovieSchema);