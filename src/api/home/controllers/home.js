'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home',({strapi})=>({
    async find(ctx) {
        const baseUrl = process.env.STRAPI_ADMIN_BASE_URL

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
            home_event_and_programs: item?.home_event_and_programs?.map(events => ({
                title: events?.title,
                description: events?.description,
                image: events?.image?.url ? `${baseUrl}${item?.image?.url}`: null,
                navigation_link: events?.navigation_link
            })),
            home_newsletters: item?.home_newsletters?.map(news => ({
                title: news?.title,
                description: news?.description,
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
