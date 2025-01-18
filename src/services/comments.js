import { turso } from './initDatabase.js'

export async function getAllCommentsService () {
  const response = await turso.execute({
    sql: `
      SELECT * FROM comments;
    `,
    args: []
  }).catch((e) => {
    console.error('ERROR ON GET ALL COMMENTS SQL', e)
  })
  return response
}

export async function getCommentByIdService ({ id }) {
  const response = await turso.execute({
    sql: `
      SELECT * FROM comments WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON GET COMMENT BY ID SQL', e)
  })
  return response
}

export async function createCommentService ({ idUser, idPost, createdAt, text }) {
  const response = await turso.execute({
    sql: `
      INSERT INTO comments (idUser, idPost, created_at, text)
      VALUES (?, ?, ?, ?)
      RETURNING *;
    `,
    args: [idUser, idPost, createdAt, text]
  }).catch((e) => {
    console.error('ERROR ON CREATE COMMENT SQL', e)
  })
  return response
}

export async function updateCommentService ({ id, idUser, idPost, createdAt, text }) {
  const response = await turso.execute({
    sql: `
      UPDATE comments
      SET idUser = ?, idPost = ?, created_at = ?, text = ?
      WHERE id = ?;
    `,
    args: [idUser, idPost, createdAt, text, id]
  }).catch((e) => {
    console.error('ERROR ON UPDATE COMMENT SQL', e)
  })
  return response
}

export async function deleteCommentService ({ id }) {
  const response = await turso.execute({
    sql: `
      DELETE FROM comments WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON DELETE COMMENT SQL', e)
  })
  return response
}
