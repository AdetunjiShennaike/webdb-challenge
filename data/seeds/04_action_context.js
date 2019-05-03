
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_context').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action_context').insert([
        { actionId: 1, contextId: 1, completed: false },
        { actionId: 1, contextId: 1, completed: false },
        { actionId: 1, contextId: 1, completed: false }
      ]);
    });
};
