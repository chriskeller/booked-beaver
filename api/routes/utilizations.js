'use strict';

const knex = require('knex')(require('../knexfile'));
const Boom = require('boom');
const Joi = require('joi');


exports.plugin = {
    name: 'utilizations',
    version: '0.0.1',

    register: async function (server, options) {

        const storage = server.app.storage;

        /* GET /utilizations */
        server.route({
            method: 'GET',
            path: '/utilizations',
            options: {
                tags: ['api'],
                description: 'GET: read utilizations',
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


                const selectOp = await knex('usage').select({
                        id: 'usageId'
                    }, 'resourceId', 'projectId', 'timeframe', 'percentage')
                    .catch((err) => {
                        console.error(err);
                        throw Boom.badData(err.message); // throw a boom baddata error
                    })

                return selectOp;


            }
        });

        server.route({
            method: 'POST',
            path: '/utilizations',
            options: {
                tags: ['api'],
                description: 'POST: add utilizations',
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
                        resourceId: Joi.number().integer().min(0).required(),
                        projectId: Joi.number().integer().min(0).required(),
                        timeframe: Joi.string().min(1).max(100).required(),
                        percentage: Joi.number().precision(1).required()
                    }
                }
            },
            handler: async (request, h) => {


                const insertOp = await knex('usage').insert({

                        resourceId: request.payload.resourceId,
                        projectId: request.payload.projectId,
                        timeframe: request.payload.timeframe,
                        percentage: request.payload.percentage

                    })
                    .catch((err) => {
                        console.error(err);
                        throw Boom.badData(err.message); // throw a boom baddata error
                    })

                return {
                    message: "utilization added successfully ",
                    id: insertOp
                }



            }


        });

    }
};