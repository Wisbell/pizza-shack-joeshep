
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('contacts', function(table){
      // table.increments('contact_id').primary(); // assume integers
      table.increments(); // same as ('id' int unsigned not null auto_increment primary key)
      table.string('name').notNullable().unique();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('message').notNullable();
    })
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts')
};

// one line exports.down
// exports.down = (knex, Promise) => knex.schema.dropTable('contacts')
