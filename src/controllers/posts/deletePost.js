import { deletePostService } from '../../services/posts.js'

export async function deletePost (req, res) {
  const postId = req.params.id
  if (!postId) return res.status(400).send()

  const response = await deletePostService({ id: postId })
  if (!response) return res.status(500).send()

  res.status(204).send()
}
