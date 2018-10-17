
exports.up = function(knex, Promise) {
  
    return knex
        .schema
        .table('usage', function(table) {
            table.decimal('percentage', 3, 2);
        });

};

exports.down = function(knex, Promise) {
  
    return knex
        .schema
        .table('usage', function(table){
            table.dropColumn('percentage');
        });

};
