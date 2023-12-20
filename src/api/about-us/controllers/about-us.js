'use strict';

/**
 * about-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const baseUrl = process.env.STRAPI_ADMIN_BASE_URL;
module.exports = createCoreController('api::about-us.about-us',({strapi})=>({
  async find(ctx) {
    const data = await strapi.query('api::about-us.about-us').findMany({
      populate: {
        image: true,
        home_image: true
      },
    });
    const extractedData = data.map((item) => ({
      ...item,
      image: item?.image?.url ? `${baseUrl}${item?.image?.url}` : null,
      home_image: item?.home_image?.url ? `${baseUrl}${item?.home_image?.url}` : null,
    }));

    return extractedData ;
  },
      
}));
