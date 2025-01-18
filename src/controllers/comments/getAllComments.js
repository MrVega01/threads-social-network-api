import { getAllCommentsService } from '../../services/comments.js'

export async function getAllComments (req, res) {
  const response = await getAllCommentsService()
  if (!response) return res.status(500).send()

  res.json(response.rows)
}
