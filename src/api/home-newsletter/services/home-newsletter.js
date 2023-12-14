'use strict';

/**
 * home-newsletter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-newsletter.home-newsletter');
