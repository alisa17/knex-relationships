exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 1, user_id: 99901, url: '/profile/1', profile_picture: '1.jpg'}),
        knex('profiles').insert({id: 2, user_id: 99902, url: '/profile/2', profile_picture: '2.jpg'}),
        knex('profiles').insert({id: 3, user_id: 99903, url: '/profile/3', profile_picture: '3.jpg'}),
        knex('profiles').insert({id: 4, user_id: 99904, url: '/profile/4', profile_picture: '4.jpg'}),
        knex('profiles').insert({id: 5, user_id: 99905, url: '/profile/5', profile_picture: '5.jpg'}),
        knex('profiles').insert({id: 6, user_id: 99906, url: '/profile/6', profile_picture: '6.jpg'}),
        knex('profiles').insert({id: 7, user_id: 99907, url: '/profile/7', profile_picture: '7.jpg'}),
        knex('profiles').insert({id: 8, user_id: 99908, url: '/profile/8', profile_picture: '8.jpg'}),
        knex('profiles').insert({id: 9, user_id: 99909, url: '/profile/9', profile_picture: '9.jpg'}),
        knex('profiles').insert({id: 10, user_id: 99910, url: '/profile/10', profile_picture: '10.jpg'}),
        knex('profiles').insert({id: 11, user_id: 99911, url: '/profile/11', profile_picture: '11.jpg'}),
        knex('profiles').insert({id: 12, user_id: 99912, url: '/profile/12', profile_picture: '12.jpg'}),
        knex('profiles').insert({id: 13, user_id: 99913, url: '/profile/13', profile_picture: '13.jpg'}),
        knex('profiles').insert({id: 14, user_id: 99914, url: '/profile/14', profile_picture: '14.jpg'}),
        knex('profiles').insert({id: 15, user_id: 99915, url: '/profile/15', profile_picture: '15.jpg'}),
        knex('profiles').insert({id: 16, user_id: 99916, url: '/profile/16', profile_picture: '16.jpg'}),
        knex('profiles').insert({id: 17, user_id: 99917, url: '/profile/17', profile_picture: '17.jpg'}),
        knex('profiles').insert({id: 18, user_id: 99918, url: '/profile/18', profile_picture: '18.jpg'}),
        knex('profiles').insert({id: 19, user_id: 99919, url: '/profile/19', profile_picture: '19.jpg'}),
        knex('profiles').insert({id: 20, user_id: 99920, url: '/profile/20', profile_picture: '20.jpg'}),
        knex('profiles').insert({id: 21, user_id: 99921, url: '/profile/21', profile_picture: '21.jpg'}),
        knex('profiles').insert({id: 22, user_id: 99922, url: '/profile/22', profile_picture: '22.jpg'}),
        knex('profiles').insert({id: 23, user_id: 99923, url: '/profile/23', profile_picture: '23.jpg'}),
        knex('profiles').insert({id: 24, user_id: 99924, url: '/profile/24', profile_picture: '24.jpg'}),
        knex('profiles').insert({id: 25, user_id: 99925, url: '/profile/25', profile_picture: '25.jpg'}),
        knex('profiles').insert({id: 26, user_id: 99926, url: '/profile/26', profile_picture: '26.jpg'})
      ]);
    });
};
