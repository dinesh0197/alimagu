"use strict";

/**
 * news-letter controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const baseUrl = process.env.STRAPI_ADMIN_BASE_URL;
module.exports = createCoreController(
  "api::news-letter.news-letter",
  ({ strapi }) => ({
    async find(ctx) {
      const data = await strapi.query("api::news-letter.news-letter").findMany({
        populate: {
          image: true,
        },
      });
      const extractedData = data.map((item) => ({
        ...item,
        image: item?.image?.url ? `${baseUrl}${item?.image?.url}` : null,
      }));

      return extractedData;
    },

    async findOne(ctx) {
      const id = ctx.params.id;
      const data = await strapi.query("api::news-letter.news-letter").findOne({
        where: { id },
        populate: {
          image: true,
        },
      });
      data?.image?.url && (data.image = `${baseUrl}${data?.image?.url}`);

      return data || {};
    },
  })
);
