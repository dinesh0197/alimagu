'use strict';

/**
 * educator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::educator.educator');
