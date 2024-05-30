import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
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
  tvShows: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TVShow",
  },
});

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;
