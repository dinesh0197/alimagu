'use strict';

/**
 * news-letter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news-letter.news-letter',({strapi})=>({
    async find(ctx) {
        const baseUrl = process.env.STRAPI_ADMIN_BASE_URL

        const data = await strapi.query('api::news-letter.news-letter').findMany({
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
