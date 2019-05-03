
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_context').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action_context').insert([
        { action_id: 1, context_id: 1 },
        { action_id: 1, context_id: 1 },
        { action_id: 1, context_id: 1 }
      ]);
    });
};
