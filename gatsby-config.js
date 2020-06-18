module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-tmdb',
      options: {
        // apiKey and sessionID are mandatory

        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,

        // Pass a ISO 639-1 value. Pattern: ([a-z]{2})-([A-Z]{2})
        // Specify the language of titles, descriptions etc.
        // Applied to all results

        language: 'en-US',

        // Specify a ISO 3166-1 code. Pattern: [A-Z]{2}
        // Will narrow the search to only display results within the specified country

        region: 'US',

        // You can specify what modules to use and which endpoints to grab data from
        // If you want to use the default endpoints but deactivate modules,
        // set the value of "activate" to true or false.

        modules: {
          account: {
            activate: false,
            },
          },
          misc: {
            activate: true,
            ],
          },
          tv: {
            activate: true,
          },
        },

        // Specify a timezone to offset the day calculation
        // e.g. used in tvAiringToday
        // See all timezones: https://developers.themoviedb.org/3/configuration/get-timezones

        timezone: 'Europe/London',

        // TMDb allows 40 Requests per 10 seconds
        // If you pull a lot of data you could have an error
        // telling you that you're over that limit. With this
        // option you can do less requests per 10 seconds

        reqPerTenSeconds: 36,

        // Decide whether you want to download images from
        // poster_path and backdrop_path URLs or not.
        // This can save you a lot of time if you're not using one/both
        // of them anyway

        poster: true,
        backdrop: false,
      },
    },
  ],
}
