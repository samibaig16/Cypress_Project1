const { defineConfig } = require("cypress")

module.exports = defineConfig({
  reporter: 'reporters/custom.js',
  // other Cypress configurations...
  // Increase the value to a larger duration
  // pageLoadTimeout: 100000

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen')
      
          return launchOptions
    }
    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true
  
      return launchOptions
    }
  })
},
    "defaultCommandTimeout": 20000,
    "requestTimeout": 180000,
    "pageLoadTimeout": 180000,
    "viewportWidth": 1920,
    "viewportHeight": 980,
    "video":true,
    "reporter": "mochawesome"
  }
})
