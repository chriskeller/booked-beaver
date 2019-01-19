
exports.up = function(knex, Promise) {
    
    return knex
        .schema
        .table('usage', function(table) {
            table.dropColumn('timeframe');
        })
        .table('usage', function(table) {
            table.text('timeframe').notNullable();
        });

};

exports.down = function(knex, Promise) {
  
    return knex
        .schema
        .table('usage', function(table) {
            table.dropColumn('timeframe');
        })
        .table('usage', function(table) {
            table.json('timeframe').notNullable();
        });
};
