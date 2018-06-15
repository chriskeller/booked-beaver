'use strict';

const Hapi = require('hapi');
const Mongojs = require('mongojs');
const Pack = require('./package');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');



const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

//Connect to db
var db = Mongojs('booked-beaver', ['resources']);

db.on('error', function (err) {
    console.log('database error', err)
})
 
db.on('connect', function () {
    console.log('database connected')

    server.app.db = db;
})

server.route({
    path: '/foobar/test',
    method: 'GET',
    options: {
      tags: ['api'],
      description: 'My route description',
      notes: 'My route notes',
      handler () {
        return {};
      }
    }
});
   
server.route({
    path: '/foobar/{foo}/{bar}',
    method: 'GET',
    options: {
      tags: ['api'],
      validate: {
        params: {
          foo: Joi.string().required().description('test'),
          bar: Joi.string().required()
        }
      },
      handler () {
        return {};
      }
    }
});


const init = async () => {

    await server.register([
        Inert,
        Vision,
        require('./routes/resources'),
        {
          plugin: HapiSwagger,
          options: {
            info: {
              title: 'Booked Beaver API',
              description: 'REST API for Booked Beaver',
              version: '1.0'
            }
          }
        }
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
