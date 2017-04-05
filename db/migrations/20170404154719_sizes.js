
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', function(table){
      // table.increments('size_id').primary(); // assume integers
      table.increments(); // same as ('id' int unsigned not null auto_increment primary key)
      table.string('name').notNullable().unique();
      table.integer('inches').notNullable();
    })
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes')
};
