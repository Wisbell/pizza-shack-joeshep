
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', function(table){
      // table.increments('size_id').primary(); // assume integers
      table.increments(); // same as ('id' int unsigned not null auto_increment primary key)
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('size').notNullable();
      // sql way of making an array of text items
      // arrays are an object
      table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}');
    });
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes')
};
