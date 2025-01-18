import { deleteRatePostService } from '../../services/ratePost.js'

export async function deleteRatePost (req, res) {
  const ratePostId = req.params.id
  if (!ratePostId) return res.status(400).send()

  const response = await deleteRatePostService({ id: ratePostId })
  if (!response) return res.status(500).send()

  res.status(204).send()
}
