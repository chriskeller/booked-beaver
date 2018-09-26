/*jshint esversion: 6 */
/*global fetch, btoa */
import Q from 'q';
/**
 * REST API for Booked Beaver
 * @class swaggerMiddleware
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
let swaggerMiddleware = (function() {
    'use strict';

    function swaggerMiddleware(options) {
        let domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'http://localhost:7500';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function serializeQueryParams(parameters) {
        let str = [];
        for (let p in parameters) {
            if (parameters.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(parameters[p]));
            }
        }
        return str.join('&');
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    let parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name swaggerMiddleware#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    swaggerMiddleware.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred) {
        const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null;
        const urlWithParams = url + (queryParams ? '?' + queryParams : '');

        if (body && !Object.keys(body).length) {
            body = undefined;
        }

        fetch(urlWithParams, {
            method,
            headers,
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        }).then((body) => {
            deferred.resolve(body);
        }).catch((error) => {
            deferred.reject(error);
        });
    };

    /**
     * My route notes
     * @method
     * @name swaggerMiddleware#getResources
     * @param {object} parameters - method options and parameters
     */
    swaggerMiddleware.prototype.getResources = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/resources';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * My route notes
     * @method
     * @name swaggerMiddleware#postResources
     * @param {object} parameters - method options and parameters
     * @param {} parameters.body - REST API for Booked Beaver
     */
    swaggerMiddleware.prototype.postResources = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/resources';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        if (parameters['body'] !== undefined) {
            body = parameters['body'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };

    return swaggerMiddleware;
})();

const _swaggerMiddleware = swaggerMiddleware;
export { _swaggerMiddleware as swaggerMiddleware };
