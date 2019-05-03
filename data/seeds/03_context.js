exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { contextName: 'at home' },
        { contextName: 'at work' },
        { contextName: 'business trip' }
      ]);
    });
};
