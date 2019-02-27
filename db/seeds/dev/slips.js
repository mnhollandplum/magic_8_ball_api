
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('slips').del()
    .then(function () {
      // Inserts seed entries
      return knex('slips').insert([
        {id: 1, advice: 'This is good advice.'},
        {id: 2, advice: 'This is mediocre advice.'},
        {id: 3, advice: 'This is bad advice.'}
      ]);
    });
};
