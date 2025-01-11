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

export async function updateThreadService ({ id, name }) {
  const response = await turso.execute({
    sql: `
      UPDATE threads
        SET name = ?
        WHERE id = ?;
    `,
    args: [name, id]
  }).catch((e) => {
    console.error('ERROR ON UPDATE THREAD SQL', e)
  })
  return response
}
export async function deleteThreadService ({ id }) {
  const response = await turso.execute({
    sql: `
      DELETE FROM threads WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON DELETE THREAD SQL', e)
  })
  return response
}
