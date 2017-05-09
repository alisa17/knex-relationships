module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers(connection) {
  return connection('users').select().join('profiles', 'user_id', '=', 'users.id')
}

function getUser(id, connection) {
  return connection('users')
    .where('users.id', id)
    .join('profiles', 'user_id', '=', 'users.id')
    .first()
}
