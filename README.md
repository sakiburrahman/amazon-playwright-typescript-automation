# amazon-playwright-typescript-automation
Test Automation Amazon website using Playwright


https://www.overstock.com/

# Install

npm install --save-dev @playwright/test
npx playwright install chromium firefox webkit
npm install --save-dev @cucumber/cucumber
npm install --save-dev @cucumber/pretty-formatter
npm install --save-dev cucumber-html-reporter
npm install --save-dev prettier
npm install --save-dev @playwright/test allure-playwright


Use fixture for setup and teardown

use base class for different method define
use pageObjects use Pages or use pages




# Instructions

1. Text input field selector should have >>> _IN
2. Radio button selector should have >>> _RB
3. Drop down selector should have >>> _DD
4. Date input field selector should have >>> _DI
5. Text selector should have >>> _TXT
6. Button selector should have >>> _BTN
7. Column selector should have >>> _COL
8. Checkbox selector should have >>> _CB
9. Link selector should have >>> _LK
10. Icon selector should have >>> _IC
11. Drop down sub menu selector should have >>> _DDS
12. Tab selector should have >>> _TAB
13. Subtab selector should have >>> _STAB




# Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

