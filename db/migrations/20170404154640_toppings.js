
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('toppings', function(table){
      // table.increments('topping_id').primary(); // assume integers
      table.increments(); // same as ('id' int unsigned not null auto_increment primary key)
      table.string('name').notNullable().unique();
    })
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('toppings')
};
