exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { actionName: 'getting paperwork', actionDescription: 'new action', completed: false, project_id: 1 },
        { actionName: 'signing contract', actionDescription: 'new action', completed: false, project_id: 1 },
        { actionName: 'getting down payment', actionDescription: 'new action', completed: false, project_id: 1 }
      ]);
    });
};
