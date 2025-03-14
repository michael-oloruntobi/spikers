const { defineConfig } = require('cypress');
require('dotenv').config(); // Load environment variables
const { GoogleSocialLogin } = require('cypress-social-logins').plugins;

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, // Set base URL from .env
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env, // Preserve existing environment variables
      GOOGLE_USERNAME: process.env.GOOGLE_USERNAME,
      GOOGLE_PASSWORD: process.env.GOOGLE_PASSWORD,
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
    };
      return config;
    },
  },
});
