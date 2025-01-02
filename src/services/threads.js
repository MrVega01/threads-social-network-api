import { turso } from './initDatabase.js'

export async function getAllThreadsService () {
  const response = await turso.execute({
    sql: `
      SELECT * from threads;
    `,
    args: []
  }).catch((e) => {
    console.error('ERROR ON GET ALL THREADS SQL', e)
  })
  return response
}

export async function createThreadService ({ name }) {
  const response = await turso.execute({
    sql: `
      INSERT INTO threads (name) VALUES (?) RETURNING *;
    `,
    args: [name]
  }).catch((e) => {
    console.error('ERROR ON CREATE THREAD SQL', e)
  })
  return response
}
