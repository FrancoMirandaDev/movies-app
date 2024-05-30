import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  movies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  tvShow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TVShow",
  },
});

const Director = mongoose.model("Director", directorSchema);

export default Director;
