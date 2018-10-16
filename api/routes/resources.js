'use strict';

const knex = require('knex')(require('../knexfile'));
const Boom = require('boom');
const Joi = require('joi');
const Bounce = require('bounce');


exports.plugin = {
    name: 'resources',
    version: '1.0.0',

    register: async function (server, options) {

        const storage = server.app.storage;

        /* GET /resources */
        server.route({
            method: 'GET',
            path: '/resources',
            options: {
                tags: ['api'],
                description: 'GET: read resources',
                notes: 'My route notes',
                cors: {
                    origin: ['*'],
                    headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Origin'],
                    additionalHeaders: ['application/json'],
                    exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
                    credentials: true
                }
            },
            handler: async function (request, h) {

                try {
                    const result = knex('resource').select('resourceId', 'name', 'active');
                    return result;
                } catch (err) {
                    return {
                        status: false
                    };
                }

            }
        });

        server.route({
            method: 'POST',
            path: '/resources',
            options: {
                tags: ['api'],
                description: 'POST: add resource',
                notes: 'My route notes',
                payload: {
                    allow: ['application/json']
                },
                cors: {
                    origin: ['*'],
                    headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Origin'],
                    additionalHeaders: ['application/json'],
                    exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
                    credentials: true
                },
                validate: {
                    payload: {
                        name: Joi.string().min(1).max(5000).required(),
                        active: Joi.boolean()
                        // array: Joi.array().items(
                        //     Joi.array().items(
                        //         Joi.string().required(), 
                        //         Joi.number().integer().required()
                        //     )
                        // )
                    }
                }
            },
            handler: async (request, h) => {


                const insertOp = await knex('resource').insert({

                        name: request.payload.name,
                        active: request.payload.active

                    })
                    .catch((err) => {
                        console.error(err);
                        throw Boom.badData(err.message); // throw a boom baddata error
                    })

                return {
                    message: "resource added successfully ",
                    id: insertOp
                }



            }


        });

    }
};