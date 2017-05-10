module.exports = {
  getUser,
  getUsers,
  addUser,
  addProfile
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


function addUser(name, email, connection) {
  return connection('users')
    .insert({
      name: name,
      email: email
    })
}

function addProfile(user_id, connection) {
  return connection('profiles')
    .insert({
      user_id: user_id,
      profile_picture: `user${user_id}.png`,
      url: `/profile/${user_id}`
    })
}
