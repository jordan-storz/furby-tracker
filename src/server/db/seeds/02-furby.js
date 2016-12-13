
exports.seed = function(knex, Promise) {
  return knex('furby').del()
    .then(function () {
      return Promise.all([
        knex('furby').insert({
          nickname: 'one',
          image_url: 'http://vignette1.wikia.nocookie.net/official-furby/images/a/a1/Furby-Boom-Black-Pink-Triangles-15344780-5.jpeg/revision/latest?cb=20140108081148',
          user_id: 1
        }),
        knex('furby').insert({
          nickname: 'two',
          image_url: 'https://pmcvariety.files.wordpress.com/2015/02/furbacca-furby-chubacca.jpg?w=670&h=377&crop=1',
          user_id: 1
        }),
        knex('furby').insert({
          nickname: 'two',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzD8RQN64S0JMbTc-sc2Yu-zE4FS3VTHqCMf3yEIcgvwMTo_yc',
          user_id: 2
        }),
        knex('furby').insert({
          nickname: 'two',
          image_url: 'https://images-na.ssl-images-amazon.com/images/I/61GLnUg1-KL.jpg',
          user_id: 2
        })
      ]);
    });
};
