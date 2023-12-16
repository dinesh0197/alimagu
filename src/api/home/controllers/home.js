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
        const extractedData = data.map(item => ({
            main : {
                description: item?.description,
                image: item?.image?.url ? `${baseUrl}${item?.image?.url}`: null
            },
            home_event_and_programs: item?.attributes?.home_event_and_programs?.data.map(events => ({
                title: events?.attributes?.title,
                description: events?.attributes?.description,
                image: events?.image?.url ? `${baseUrl}${item?.image?.url}`: null
            })),
            home_newsletters: item?.attributes?.home_newsletters?.data.map(news => ({
                title: news?.attributes?.title,
                description: news?.attributes?.description,
                image: news?.image?.url ? `${baseUrl}${item?.image?.url}`: null
            })),
            home_membership: {
              description: item?.home_membership?.description,
              membership_count: item?.home_membership?.membership_count,
              image: item?.home_membership?.image?.url ? `${baseUrl}${item?.home_membership?.image?.url}`: null
            }

          }));
    
        return { data: extractedData };
      },
}));
