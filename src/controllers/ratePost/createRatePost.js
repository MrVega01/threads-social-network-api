import { createRatePostService } from '../../services/ratePost.js'

export async function createRatePost (req, res) {
  const { ratePostCol, idPost, createdAt, stars, idUser } = req.body
  if (!ratePostCol || !idPost || !createdAt || !stars || !idUser) return res.status(400).send()

  const response = await createRatePostService({ ratePostCol, idPost, createdAt, stars, idUser })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
