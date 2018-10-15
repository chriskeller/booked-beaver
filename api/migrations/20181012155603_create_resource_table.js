exports.up = function (knex, Promise) {

    return knex
        .schema
        .createTable('user', function (userTable) {

            // Primary Key
            userTable.increments('userId').primary();

            // Data
            userTable.string('name', 50).notNullable();
            userTable.string('email', 255).notNullable().unique();
            userTable.string('password', 255).notNullable();

            userTable.timestamp('created_at').notNullable();

        })

        .createTable('resource', function (resourceTable) {

            // Primary Key
            resourceTable.increments('resourceId').primary();

            // Data
            resourceTable.string('name', 255).notNullable();
            resourceTable.boolean('active').notNullable().defaultTo(true);

            resourceTable.timestamp('created_at').notNullable();

        })

        .createTable('project', function (projectTable) {

            // Primary Key
            projectTable.increments('projectId').primary();

            // Data
            projectTable.string('name', 255).notNullable();
            projectTable.boolean('active').notNullable().defaultTo(true);

            projectTable.timestamp('created_at').notNullable();

        })

        .createTable('usage', function (usageTable) {

            // Primary Key
            usageTable.increments('usageId').primary();

            // Foreign keys
            usageTable.string('resourceId', 255).references('resourceId').inTable('resource').notNullable();
            usageTable.string('projectId', 255).references('projectId').inTable('project').notNullable();
            usageTable.json('timeframe').notNullable();

            usageTable.timestamp('created_at').notNullable();

        });
};

exports.down = function (knex, Promise) {

    return knex

        .schema
        .dropTableIfExists('usage')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
        .dropTableIfExists('user');
};