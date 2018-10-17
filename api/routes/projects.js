'use strict';

const knex = require('knex')(require('../knexfile'));
const Boom = require('boom');
const Joi = require('joi');
const Bounce = require('bounce');


exports.plugin = {
    name: 'projects',
    version: '1.0.0',

    register: async function (server, options) {

        const storage = server.app.storage;

        /* GET /projects */
        server.route({
            method: 'GET',
            path: '/projects',
            options: {
                tags: ['api'],
                description: 'GET: read projects',
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


                const selectOp = await knex('project').select({
                        id: 'projectId'
                    }, 'name', 'active')
                    .catch((err) => {
                        console.error(err);
                        throw Boom.badData(err.message); // throw a boom baddata error
                    })

                return selectOp;


            }
        });

        server.route({
            method: 'POST',
            path: '/projects',
            options: {
                tags: ['api'],
                description: 'POST: add project',
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


                const insertOp = await knex('project').insert({

                        name: request.payload.name,
                        active: request.payload.active

                    })
                    .catch((err) => {
                        console.error(err);
                        throw Boom.badData(err.message); // throw a boom baddata error
                    })

                return {
                    message: "project added successfully ",
                    id: insertOp
                }



            }


        });

    }
};