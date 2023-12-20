module.exports = {
    afterUpdate: async ({ result }) => {
      const { email, firstName, lastName, approve } = result;
  
      if (approve) {
        await strapi
          .plugin("email-designer")
          .service("email")
          .sendTemplatedEmail(
            {
              // required
              to: email || "alimagu@yopmail.com",
  
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
              //   subject: `Thank you for your order`,
            },
            {
              // this object must include all variables you're using in your email template
              userName: `${firstName || ""} ${lastName || ""}`,
            }
          );
      }
    },
  };
  