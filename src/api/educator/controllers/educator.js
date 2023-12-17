"use strict";

/**
 * educator controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::educator.educator",
  ({ strapi }) => ({
    async find(ctx) {
      const baseUrl = process.env.STRAPI_ADMIN_BASE_URL;

      //   const data = await strapi.query("api::educator.educator").findMany({
      //     populate: {
      //       image: true,
      //     },
      //   });
      //   const extractedData = data.map((item) => ({
      //     ...item,
      //     image: item?.image?.url ? `${baseUrl}${item?.image?.url}` : null,
      //   }));

      await strapi.plugin("email-designer").service("email").sendTemplatedEmail(
        {
          // required
          to: "alimagu@yopmail.com",

          // optional if /config/plugins.js -> email.settings.defaultFrom is set
          from: "dineshr0197@gamil.com",

          // optional array of files
          attachments: [],
        },
        {
          // required - Ref ID defined in the template designer (won't change on import)
          templateReferenceId: 1,

          // If provided here will override the template's subject.
          // Can include variables like `Thank you for your order {{= USER.firstName }}!`
          subject: `Thank you for your order`,
        },
        {
          // this object must include all variables you're using in your email template
          educatorName: "sdsaf",
        }
      );

      //   return { data: extractedData };
    },
  })
);
