module.exports = {
  getUser,
  getUsers,
  addUser,
  addProfile,
  addBlog,
  getBlogs
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

function addBlog(title, content, user_id, connection) {
  return connection('posts')
    .insert({
      title: title,
      content: content,
      user_id: user_id
    })
}

function getBlogs(user_id, connection) {
  return connection('posts')
    .where(user_id, user_id)
}
