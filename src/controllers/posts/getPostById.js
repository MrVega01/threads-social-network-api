import { getPostByIdService } from '../../services/posts.js'

export async function getPostById (req, res) {
  const postId = req.params.id
  if (!postId) return res.status(400).send()

  const response = await getPostByIdService({ id: postId })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
