exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 1, user_id: 99901, url: '/profile/99901', profile_picture: 'user1.png'}),
        knex('profiles').insert({id: 2, user_id: 99902, url: '/profile/99902', profile_picture: 'user2.png'}),
        knex('profiles').insert({id: 3, user_id: 99903, url: '/profile/99903', profile_picture: 'user3.png'}),
        knex('profiles').insert({id: 4, user_id: 99904, url: '/profile/99904', profile_picture: 'user4.png'}),
        knex('profiles').insert({id: 5, user_id: 99905, url: '/profile/99905', profile_picture: 'user5.png'}),
        knex('profiles').insert({id: 6, user_id: 99906, url: '/profile/99906', profile_picture: 'user6.png'}),
        knex('profiles').insert({id: 7, user_id: 99907, url: '/profile/99907', profile_picture: 'user7.png'}),
        knex('profiles').insert({id: 8, user_id: 99908, url: '/profile/99908', profile_picture: 'user8.png'}),
        knex('profiles').insert({id: 9, user_id: 99909, url: '/profile/99909', profile_picture: 'user9.png'}),
        knex('profiles').insert({id: 10, user_id: 99910, url: '/profile/99910', profile_picture: 'user10.png'}),
        knex('profiles').insert({id: 11, user_id: 99911, url: '/profile/99911', profile_picture: 'user11.png'}),
        knex('profiles').insert({id: 12, user_id: 99912, url: '/profile/99912', profile_picture: 'user12.png'}),
        knex('profiles').insert({id: 13, user_id: 99913, url: '/profile/99913', profile_picture: 'user13.png'}),
        knex('profiles').insert({id: 14, user_id: 99914, url: '/profile/99914', profile_picture: 'user14.png'}),
        knex('profiles').insert({id: 15, user_id: 99915, url: '/profile/99915', profile_picture: 'user15.png'}),
        knex('profiles').insert({id: 16, user_id: 99916, url: '/profile/99916', profile_picture: 'user16.png'}),
        knex('profiles').insert({id: 17, user_id: 99917, url: '/profile/99917', profile_picture: 'user17.png'}),
        knex('profiles').insert({id: 18, user_id: 99918, url: '/profile/99918', profile_picture: 'user18.png'}),
        knex('profiles').insert({id: 19, user_id: 99919, url: '/profile/99919', profile_picture: 'user19.png'}),
        knex('profiles').insert({id: 20, user_id: 99920, url: '/profile/99920', profile_picture: 'user20.png'}),
        knex('profiles').insert({id: 21, user_id: 99921, url: '/profile/99921', profile_picture: 'user21.png'}),
        knex('profiles').insert({id: 22, user_id: 99922, url: '/profile/99922', profile_picture: 'user22.png'}),
        knex('profiles').insert({id: 23, user_id: 99923, url: '/profile/99923', profile_picture: 'user23.png'}),
        knex('profiles').insert({id: 24, user_id: 99924, url: '/profile/99924', profile_picture: 'user24.png'}),
        knex('profiles').insert({id: 25, user_id: 99925, url: '/profile/99925', profile_picture: 'user25.png'}),
        knex('profiles').insert({id: 26, user_id: 99926, url: '/profile/99926', profile_picture: 'user26.png'})
      ]);
    });
};
