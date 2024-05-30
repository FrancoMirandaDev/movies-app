import mongoose from "mongoose";

const tvShowSchema = new mongoose.Schema({
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
  seasons: [
    {
      seasonNumber: {
        type: Number,
        required: true,
      },
      episodes: [
        {
          title: {
            type: String,
            required: true,
          },
          duration: {
            type: Number,
          },
          director: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Director",
          },
        },
      ],
    },
  ],
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});

const TVShow = mongoose.model("TVShow", tvShowSchema);

export default TVShow;
