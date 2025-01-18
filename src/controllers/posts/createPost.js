import { createPostService } from '../../services/posts.js'

export async function createPost (req, res) {
  const { idUser, idThread, createdAt, text, idPostShared } = req.body
  if (!idUser || !idThread || !createdAt || !text) return res.status(400).send()

  const response = await createPostService({ idUser, idThread, createdAt, text, idPostShared })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
