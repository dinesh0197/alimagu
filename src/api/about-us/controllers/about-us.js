'use strict';

/**
 * about-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about-us.about-us',({strapi})=>({
    async find(ctx) {
        const baseUrl = process.env.STRAPI_ADMIN_BASE_URL

        const data = await strapi.query('api::about-us.about-us').findMany({
            populate: {
              image: true,
            }
        });
        const extractedData = data.map(item => ({
                ...item,
                image: item?.image?.url ? `${baseUrl}${item?.image?.url}`: null
          }));
    
        return {data: extractedData};
      },
}));
