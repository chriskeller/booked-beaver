module.exports = {


        migrations: {
            tableName: 'knex_migrations'
        },

        client: 'mysql',
        connection: {

            host: 'db',
            port: '',

            user: 'root',
            password: 'rootpwd',

            database: 'beaverdb',
            charset: 'utf8',

        }

};