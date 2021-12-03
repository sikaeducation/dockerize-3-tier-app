exports.seed = async function(knex) {
  await knex("dog").del()

  await knex("dog").insert([{
    name: "Bixby",
  },{
    name: "Harmony",
  },{
    name: "Mesa",
  }]);
};
