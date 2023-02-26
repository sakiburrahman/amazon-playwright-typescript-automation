const { chromium } = require('playwright');

// Set up a fixture for launching a browser
const browserFixture = async () => {
  const browser = await chromium.launch();
  return browser;
};

// Export the fixture
module.exports = {
  browserFixture,
};
