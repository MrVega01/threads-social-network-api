import { updateThreadService } from '../../services/threads.js'

export default async function updateThread (req, res) {
  const threadId = req.params?.id
  const threadName = req.body?.name
  if (!threadId || !threadName) return res.status(400).send()

  const response = await updateThreadService({ id: threadId, name: threadName })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
