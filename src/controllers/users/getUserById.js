import { getUserByIdService } from '../../services/users.js'

export async function getUserById (req, res) {
  const userId = req.params.id
  if (!userId) return res.status(400).send()

  const response = await getUserByIdService({ id: userId })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
