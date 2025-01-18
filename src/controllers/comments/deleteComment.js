import { deleteCommentService } from '../../services/comments.js'

export async function deleteComment (req, res) {
  const commentId = req.params.id
  if (!commentId) return res.status(400).send()

  const response = await deleteCommentService({ id: commentId })
  if (!response) return res.status(500).send()

  res.status(204).send()
}
