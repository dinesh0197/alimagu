'use strict';

/**
 * home-event-and-program controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const baseUrl = process.env.STRAPI_ADMIN_BASE_URL;
module.exports = createCoreController('api::home-event-and-program.home-event-and-program',({strapi})=>({
    async find(ctx) {
        const data = await strapi.query('api::home-event-and-program.home-event-and-program').findMany({
          populate: {
            image: true,
          },
        });
        const extractedData = data.map((item) => ({
          ...item,
          image: item?.image?.url ? `${baseUrl}${item?.image?.url}` : null,
        }));
  
        return extractedData ;
      },
}));
