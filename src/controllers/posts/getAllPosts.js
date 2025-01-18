import { getAllPostsService } from '../../services/posts.js'

export async function getAllPosts (req, res) {
  const response = await getAllPostsService()
  if (!response) return res.status(500).send()

  res.json(response.rows)
}
