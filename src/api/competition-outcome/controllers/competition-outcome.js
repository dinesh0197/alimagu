'use strict';

/**
 * competition-outcome controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::competition-outcome.competition-outcome',({strapi})=>({
    async find(ctx) {
    
        // Calling the default core action
        const { data, meta } = await super.find(ctx);
    
        const extractedData = data.map(item => ({
            description: item?.attributes?.description,
            title: item?.attributes?.title,
            link: item?.attributes?.link,
            image: item?.attributes?.image?.data?.attributes?.url
          }));
    
        return { data: extractedData, meta };
      },
}));
