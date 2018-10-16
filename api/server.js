'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const hapiOptions = {
    host: 'localhost',
    port: 7500,
    routes: {
      validate: {
        failAction: async (request, h, err) => {
          if (process.env.NODE_ENV === 'production') {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error('ValidationError:', err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        }
      }
    }
  };

const server = Hapi.server(hapiOptions);

const init = async () => {

    // Register plugins for Hapi server
    await server.register([
        Inert,
        Vision,
        require('./routes/resources'),
        {
          plugin: HapiSwagger,
          options: {
            jsonPath: '/swagger.json',
            info: {
              title: 'Booked Beaver API',
              description: 'REST API for Booked Beaver',
              version: '1.0'
            }
          }
        }
    ]);

    // Start Hapi server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};



process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
