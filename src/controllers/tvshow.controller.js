import TVShow from "../models/TVShow.js";

export const getTVShow = async (req, res) => {
  try {
    // Get all TV Shows
    const tvshow = await TVShow.find();
    res.json(tvshow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEpisode = async (req, res) => {
  const { title, season, episode } = req.params;

  // Check if all fields are provided
  if (!title || !season || !episode) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Get the TV Show by title
    const tvshow = await TVShow.findOne({ title: title });

    if (!tvshow) {
      return res.status(404).json({ message: "TV Show not found" });
    }
    // Get the episode by season and episode number
    const episodeFound = tvshow.seasons[season].episodes[episode];
    if (!episodeFound) {
      return res.status(404).json({ message: "Episode not found" });
    }
    // Populate the director field
    episodeFound.populate("director");
    res.json(episodeFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
