import { updatePostService } from '../../services/posts.js'

export async function updatePost (req, res) {
  const { id, idUser, idThread, createdAt, text, idPostShared } = req.body
  if (!id || !idUser || !idThread || !createdAt || !text) return res.status(400).send()

  const response = await updatePostService({ id, idUser, idThread, createdAt, text, idPostShared })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
