import { createThreadService } from '../../services/threads.js'

export default async function createThread (req, res) {
  const threadName = req.body?.name
  if (!threadName) return res.status(400).send()

  const response = await createThreadService({ name: threadName })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
