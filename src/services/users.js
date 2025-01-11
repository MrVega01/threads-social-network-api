import { turso } from './initDatabase.js'

export async function getAllUsersService () {
  const response = await turso.execute({
    sql: `
      SELECT * from users;
    `,
    args: []
  }).catch((e) => {
    console.error('ERROR ON GET ALL USERS SQL', e)
  })
  return response
}

export async function createUserService ({
  createTime,
  email,
  phone,
  password,
  birthdate,
  picture
}) {
  const response = await turso.execute({
    sql: `
      INSERT INTO users (
        create_time,
        email,
        phone,
        password,
        birthdate,
        picture
      ) VALUES (?, ?, ?, ?, ?, ?) RETURNING *;
    `,
    args: [createTime, email, phone, password, birthdate, picture]
  }).catch((e) => {
    console.error('ERROR ON CREATE USER SQL', e)
  })
  return response
}

export async function updateUserService ({
  id,
  email,
  phone,
  password,
  birthdate,
  picture
}) {
  const response = await turso.execute({
    sql: `
      UPDATE users
        SET
          email = ?,
          phone = ?,
          password = ?,
          birthdate = ?,
          picture = ?
        WHERE id = ?;
    `,
    args: [email, phone, password, birthdate, picture, id]
  }).catch((e) => {
    console.error('ERROR ON UPDATE USER SQL', e)
  })
  return response
}

export async function deleteUserService ({ id }) {
  const response = await turso.execute({
    sql: `
      DELETE FROM users WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON DELETE USER SQL', e)
  })
  return response
}
