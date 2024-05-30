import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  releaseYear: {
    type: Number,
  },
  genre: {
    type: String,
  },
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Director",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
