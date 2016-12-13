
exports.seed = function(knex, Promise) {
  return knex('furby').del()
    .then(function () {
      return knex.raw("ALTER SEQUENCE furby_id_seq RESTART WITH 11;")
    })
    .then(function () {
      return Promise.all([
        knex('furby').insert({
          id: 1,
          nickname: 'one',
          image_url: 'http://vignette1.wikia.nocookie.net/official-furby/images/a/a1/Furby-Boom-Black-Pink-Triangles-15344780-5.jpeg/revision/latest?cb=20140108081148',
          user_id: 1
        }),
        knex('furby').insert({
          id: 2,
          nickname: 'two',
          image_url: 'https://pmcvariety.files.wordpress.com/2015/02/furbacca-furby-chubacca.jpg?w=670&h=377&crop=1',
          user_id: 1
        }),
        knex('furby').insert({
          id: 3,
          nickname: 'three',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzD8RQN64S0JMbTc-sc2Yu-zE4FS3VTHqCMf3yEIcgvwMTo_yc',
          user_id: 2
        }),
        knex('furby').insert({
          id: 4,
          nickname: 'colorful',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/61GLnUg1-KL.jpg',
          user_id: 2
        }),
        knex('furby').insert({
          id: 5,
          nickname: 'blue',
          image_url: 'http://www.hasbro.com/common/productimages/en_US/5a8c759850569047f5987e09c0be0a3f/5A9C729A50569047F571E80FCCC3A64B.jpg',
          user_id: 2
        }),
        knex('furby').insert({
          id: 6,
          nickname: 'b',
          image_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoE2Tpyk6T9wTJmLeVe6l2kTUIHB-ml7Av5SPMSVzn5yZzy_gf',
          user_id: 2
        }),
        knex('furby').insert({
          id: 7,
          nickname: 'blue',
          image_url: 'http://crystalboomtoy.com/wp-content/uploads/2014/10/Pink-Blue-Crystal-Edition-Furby-Boom.jpg',
          user_id: 2
        }),
        knex('furby').insert({
          id: 8,
          nickname: 'blue',
          image_url: '',
          user_id: 2
        }),
        knex('furby').insert({
          id: 9,
          nickname: 'red',
          image_url: 'https://s-media-cache-ak0.pinimg.com/564x/60/d1/0e/60d10e9463eeb67c350200a20d849320.jpg',
          user_id: 2
        }),
        knex('furby').insert({
          id: 10,
          nickname: 'angry',
          image_url: 'https://i.ytimg.com/vi/XdOCPd4XTXM/maxresdefault.jpg',
          user_id: 2
        }),
      ]);
    });
};
