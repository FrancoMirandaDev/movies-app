import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  const { filterByActor } = req.query;
  try {
    let movies = [];
    if (filterByActor) {
      // No movies found with the actor
      if (movies.length === 0) {
        return res.status(404).json({ message: "Actor not found" });
      }

      // Filter by actor and order by ASC
      movies = await Movie.find({ actors: filterByActor }).sort({ title: 1 });
    } else {
      movies = await Movie.find();
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  const { title, description, releaseYear, genre, actors, director } = req.body;

  // Check if all fields are provided
  if (
    !title ||
    !description ||
    !releaseYear ||
    !genre ||
    !actors ||
    !director
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newMovie = new Movie({
      title,
      description,
      releaseYear,
      genre,
      actors,
      director,
    });

    // Save the movie in the database
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
