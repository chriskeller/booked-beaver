module.exports = {


        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            tableName: './seeds'
        },

        client: 'mysql',
        connection: {

            host: 'TY-ES-MWS0007',

            user: 'beaver1',
            password: '123456',

            database: 'beaver',
            charset: 'utf8',

        }

};