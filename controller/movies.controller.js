import Movie from '../model/movies.model.js'

// 1.read or find 0r search
export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// 2.create
export const MovieCreate = async (req, res) => {
  //  id, title, desc ===> format of db data's

  // validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  })

  // validate success or error
  try {
    const movie = await newMovie.save()
    return res.status(201).json(movie)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// 3. details
export const MovieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    if (movie == null) {
      return res.status(404).json({ message: "Can't find movie" })
    } else {
      res.json(movie)
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// 4.update
export const MovieUpdate = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    )
    res.status(200).json(updatedMovie)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// delete
export const MovieDelete = async (req, res) => {
  const movieId = req.params.id

  try {
    await Movie.deleteOne({ _id: movieId })
    res.json({ message: 'Movie deleted!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
