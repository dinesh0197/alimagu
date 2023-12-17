module.exports = ({ env }) => ({
  email: {
      enabled: true,
      config: {
        provider: "strapi-provider-email-smtp",
        providerOptions: {
          host: "smtp.gmail.com", //SMTP Host
          port: 587, //SMTP Port
          secure: false,
          username: "dineshr0197@gmail.com",
          password: "yagcevhowkhenyze",
          rejectUnauthorized: true,
          requireTLS: true,
          connectionTimeout: 1,
        },
      },
      settings: {
        defaultFrom: "dineshr0197@gmail.com",
        defaultReplyTo: "alimagu@yopmail.com",
      },
    },
  // ...
  'email-designer': {
    enabled: true,

    // ⬇︎ Add the config property
    config: {
      editor: {
        // optional - if you have a premium unlayer account
      //   projectId: [UNLAYER_PROJECT_ID],

        tools: {
          heading: {
            properties: {
              text: {
                value: 'This is the new default text!',
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: 'Anton',
                value: "'Anton', sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Anton',
              },
              {
                label: 'Lato',
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Lato',
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{ USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ],
        },
        appearance: {
          theme: 'dark',
          panels: {
            tools: {
              dock: 'left',
            },
          },
        },
      },
    },
  },
  // ...

});