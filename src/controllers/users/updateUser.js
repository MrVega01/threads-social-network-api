import { updateUserService } from '../../services/users.js'

export async function updateUser (req, res) {
  const { id, email, phone, password, birthdate, picture } = req.body
  if (!id || !email || !phone || !password || !birthdate) return res.status(400).send()

  const response = await updateUserService({ id, email, phone, password, birthdate, picture })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
