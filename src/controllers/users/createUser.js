import { createUserService } from '../../services/users.js'

export async function createUser (req, res) {
  const { createTime, email, phone, password, birthdate, picture } = req.body
  if (!createTime || !email || !phone || !password || !birthdate) return res.status(400).send()

  const response = await createUserService({ createTime, email, phone, password, birthdate, picture })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
