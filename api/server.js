'use strict';

const Hapi = require('hapi');
const storage = require('node-persist');
const Pack = require('./package');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');



const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {
    
    //initiate the persistent storage
    await storage.init({
        dir: './data',
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: 'utf8',
        logging: false,
        ttl: false,
        expiredInterval: 2*60*1000, // in milliseconds; every 2 minutes the process will clean-up the expired cache
        forgiveParseErrors: false
    }, function (err, content) {
        if (err) {
            return console.error(err)
        }
        console.log(content)
    });
    
    
    let fibonacci = await storage.getItem('fibonacci');

    if(! fibonacci) {
        await storage.setItem('fibonacci', [0,1,1,2,3,5,8])
            .then(() => {
                console.log('Stored successfully');
            })
            .catch(err => console.error(err));
        
    }

    fibonacci = await storage.getItem('fibonacci');
    console.log('Fibonacci is ' + fibonacci); 
    

    // Register plugins for Hapi server
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

    // Start Hapi server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};



process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
