'use strict';

/**
 * publications-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::publications-page.publications-page',({strapi})=>({
    async find(ctx) {
    
        // Calling the default core action
        const { data, meta } = await super.find(ctx);
    
        const extractedData = data.map(item => ({
            title: item?.attributes?.title,
            publication_date: item?.attributes?.publication_date,
            description: item?.attributes?.description,
            image: item?.attributes?.image?.data?.attributes?.url
          }));
    
        return { data: extractedData, meta };
      },
}));
