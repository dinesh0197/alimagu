'use strict';

/**
 * publications-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::publications-page.publications-page',({strapi})=>({
    async find(ctx) {
    
        // Calling the default core action
        const { data, meta } = await super.find(ctx);
    
        const extractedData = data?.attributes.map(item => ({
            title: item?.title,
            publication_date: item?.publication_date,
            description: item?.description,
            image: item?.image?.data?.attributes?.url
          }));
    
        return { data: extractedData, meta };
      },
}));
