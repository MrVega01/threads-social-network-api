import { getCommentByIdService } from '../../services/comments.js'

export async function getCommentById (req, res) {
  const commentId = req.params.id
  if (!commentId) return res.status(400).send()

  const response = await getCommentByIdService({ id: commentId })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
