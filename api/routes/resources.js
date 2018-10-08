'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

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

                let resources = await storage.getItem('resources');
                
                if(! resources ){
                    return Boom.notFound();
                }

                return resources;
                
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
                  allow: [ 'application/json' ]
                },
                validate: {
                    payload: {
                        name: Joi.string().min(1).max(50).required(),
                        array: Joi.array().items(
                            Joi.array().items(
                                Joi.string().required(), 
                                Joi.number().integer().required()
                            )
                        )
                    }
                }
            },
            handler: async function (request, h) {

                const resources = request.payload;

                await storage.setItem('resources', resources)
                    .then(() => {
                        console.log('Stored successfully');
                        return 'Success';
                    })
                    .catch(err => console.error(err));
 
                return resources;
            }
              
        });

        // etc ...
       // await someAsyncMethods();
    }
};

/*
exports.register = function (server, options, next) {

    const db = server.app.db;

    server.route({
        method: 'GET',
        path: '/books',
        options: {
            handler: function (request, reply) {

                db.books.find((err, docs) => {

                    if (err) {
                        return reply(Boom.wrap(err, 'Internal MongoDB error'));
                    }

                    reply(docs);
                });

            },
            tags: ['api'],
            description: 'Says hello!',
            notes: 'Some important notes when using this',
        }
    });
/*
    server.route({
        method: 'GET',
        path: '/books/{id}',
        options: {
            handler: function (request, reply) {

                db.books.findOne({
                    _id: request.params.id
                }, (err, doc) => {

                    if (err) {
                        return reply(Boom.wrap(err, 'Internal MongoDB error'));
                    }

                    if (!doc) {
                        return reply(Boom.notFound());
                    }

                    reply(doc);
                });
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/books',
        options: {
            handler: function (request, reply) {

                const book = request.payload;

                //Create an id
                book._id = uuid.v1();

                db.books.save(book, (err, result) => {

                    if (err) {
                        return reply(Boom.wrap(err, 'Internal MongoDB error'));
                    }

                    reply(book);
                });
            },
            validate: {
                payload: {
                    title: Joi.string().min(10).max(50).required(),
                    author: Joi.string().min(10).max(50).required(),
                    isbn: Joi.number()
                }
            }
        }
    });

    server.route({
        method: 'PATCH',
        path: '/books/{id}',
        options: {
            handler: function (request, reply) {

                db.books.update({
                    _id: request.params.id
                }, {
                    $set: request.payload
                }, function (err, result) {

                    if (err) {
                        return reply(Boom.wrap(err, 'Internal MongoDB error'));
                    }

                    if (result.n === 0) {
                        return reply(Boom.notFound());
                    }

                    reply().code(204);
                });
            },
            validate: {
                payload: Joi.object({
                    title: Joi.string().min(10).max(50).optional(),
                    author: Joi.string().min(10).max(50).optional(),
                    isbn: Joi.number().optional()
                }).required().min(1)
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/books/{id}',
        options: {
            handler: function (request, reply) {

                db.books.remove({
                    _id: request.params.id
                }, function (err, result) {

                    if (err) {
                        return reply(Boom.wrap(err, 'Internal MongoDB error'));
                    }

                    if (result.n === 0) {
                        return reply(Boom.notFound());
                    }

                    reply().code(204);
                });
            }
        }
    });
    

    return next();
};

exports.register.attributes = {
    name: 'routes-books'
};
*/