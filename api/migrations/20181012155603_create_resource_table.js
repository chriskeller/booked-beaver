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

        })

        .createTable('resource', function (resourceTable) {

            // Primary Key
            resourceTable.increments('resourceId').primary();

            // Data
            resourceTable.string('name', 255).notNullable();
            resourceTable.boolean('active').notNullable().defaultTo(true);

        })

        .createTable('project', function (projectTable) {

            // Primary Key
            projectTable.increments('projectId').primary();

            // Data
            projectTable.string('name', 255).notNullable();
            projectTable.boolean('active').notNullable().defaultTo(true);


        })

        .createTable('usage', function (usageTable) {

            // Primary Key
            usageTable.increments('usageId').primary();

            // Foreign keys (primary keys are created as int(10))
            usageTable.integer('resourceId').unsigned();
            usageTable.integer('projectId').unsigned();
            usageTable.foreign('resourceId').references('resourceId').inTable('resource');
            usageTable.foreign('projectId').references('projectId').inTable('project');
            usageTable.json('timeframe').notNullable();


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