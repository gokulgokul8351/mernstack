export const MovieIndex = (req, res) => {
  res.send('Get all movies lists')
}

export const MovieCreate = (req, res) => {
  //  id, title, desc
  console.log(req.body)

  return res.json(req.body)
}

export const MovieUpdate = (req, res) => {
  res.send('Movie updated')
}

export const MovieDelete = (req, res) => {
  res.send('Movie is deleted')
}
