'use strict';

const toppings = require('./toppings');

console.log("toppings", toppings)

exports.seed = function(knex, Promise) {

  let toppingsPromises = toppings.map( ({name}) => {
    return knex('toppings').insert({name})
  })

  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(toppingsPromises)
    });
};
