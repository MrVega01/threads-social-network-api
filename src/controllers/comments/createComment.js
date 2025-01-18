import { createCommentService } from '../../services/comments.js'

export async function createComment (req, res) {
  const { idUser, idPost, createdAt, text } = req.body
  if (!idUser || !idPost || !createdAt || !text) return res.status(400).send()

  const response = await createCommentService({ idUser, idPost, createdAt, text })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
