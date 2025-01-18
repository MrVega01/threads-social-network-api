import { updateCommentService } from '../../services/comments.js'

export async function updateComment (req, res) {
  const { id, idUser, idPost, createdAt, text } = req.body
  if (!id || !idUser || !idPost || !createdAt || !text) return res.status(400).send()

  const response = await updateCommentService({ id, idUser, idPost, createdAt, text })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
