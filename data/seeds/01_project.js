
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { projectName: 'starting program', projectDescription: 'new project', completed: false },
        { projectName: 'finding a team', projectDescription: 'new project', completed: false },
        { projectName: 'creating company atmosphere', projectDescription: 'new project', completed: false }
      ]);
    });
};
