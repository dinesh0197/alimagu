'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home',({strapi})=>({
    async find(ctx) {
        const baseUrl = process.env.STRAPI_ADMIN_BASE_URL
        // Calling the default core action
        // const { data, meta } = await super.find(ctx);

        const data = await strapi.query('api::home.home').findMany({
            populate: {
              image: true,
              home_event_and_programs: {
                populate : {
                  image: true
                }
              },
              home_newsletters: {
                populate : {
                  image: true
                }
              },
              home_membership: {
                populate : {
                  image: true
                }
              }
            }
        });
        // const extractedData = data.map(item => ({
        //     main : {
        //         description: item?.attributes?.description,
        //         image: item?.attributes?.image?.data?.attributes?.url ? `${baseUrl}${item?.attributes?.image?.data?.attributes?.url}`: null
        //     },
        //     home_event_and_programs: item?.attributes?.home_event_and_programs?.data.map(events => ({
        //         title: events?.attributes?.title,
        //         description: events?.attributes?.description,
        //         image: item?.attributes?.image?.data?.attributes?.url ? `${baseUrl}${item?.attributes?.image?.data?.attributes?.url}`: null
        //     })),
        //     home_newsletters: item?.attributes?.home_newsletters?.data.map(events => ({
        //         title: events?.attributes?.title,
        //         description: events?.attributes?.description,
        //         image: item?.attributes?.image?.data?.attributes?.url ? `${baseUrl}${item?.attributes?.image?.data?.attributes?.url}`: null
        //     })),
        //     home_membership: item?.attributes?.home_membership?.data.map(events => ({
        //         title: events?.attributes?.title,
        //         description: events?.attributes?.description,
        //         image: item?.attributes?.image?.data?.attributes?.url ? `${baseUrl}${item?.attributes?.image?.data?.attributes?.url}`: null
        //     })),

        //   }));
    
        return { data: data };
      },
}));
