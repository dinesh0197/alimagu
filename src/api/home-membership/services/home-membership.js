'use strict';

/**
 * home-membership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-membership.home-membership');
