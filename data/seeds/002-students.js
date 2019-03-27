exports.seed = function(knex, Promise) {
  return knex("students")
    .truncate()
    .then(function() {
      return knex("students").insert([
        { name: "Brandon", cohort_id: 1 },
        { name: "Ryan", cohort_id: 2 },
        { name: "Jake", cohort_id: 3 }
      ]);
    });
};
