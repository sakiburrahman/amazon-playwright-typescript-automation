// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { CommonUIPage } from '../../common_components/commonUI_page';

export class HomePage {
  readonly page: Page;
  readonly hader_TXT: Locator;
  readonly freeProductTour_BTN: Locator;
  readonly findOutMore_BTN: Locator;
  readonly overview_TXT: Locator;
  readonly howItWorks_TXT: Locator;
  readonly features_TXT: Locator;
  readonly contactUs_TXT: Locator;
  readonly phone_LK: Locator;
  readonly email_LK: Locator;
  readonly copyright_Text: Locator;




  constructor(page: Page) {
    this.page = page;
    this.hader_TXT = page.locator('.small', { hasText: 'INTERNATIONAL TAX PLATFORM' });
    this.freeProductTour_BTN = page.locator('xpath=//a[.="Free Product Tour"]', { hasText: 'Free Product Tour' });
    this.findOutMore_BTN = page.locator('.find-out', { hasText: 'Find out more' });
    this.overview_TXT = page.locator('.overview-header', { hasText: 'Overview' });
    this.howItWorks_TXT = page.locator('xpath=//h2[.="How it works"]', { hasText: 'How it works' });
    this.features_TXT = page.locator('h1[_ngcontent-serverapp-c138]', { hasText: ' Features ' });
    this.contactUs_TXT = page.locator('xpath=//h2[.="Contact Us"]', { hasText: 'Contact Us' });
    // this.phone_LK = page.locator('.contact-us-btn');
    this.phone_LK = page.getByRole('link', { name: ' +1 518 337 1860' });
    // this.email_LK = page.locator('xpath=//a[contains(.,"info@orbitax.com")]');
    this.email_LK = page.getByRole('link', { name: ' info@orbitax.com' });
    this.copyright_Text = page.locator('.copyright');


  }

  // ********** Verify Methos **********


  async verifyHomeVideoUrl() {
    const commonUIPage = new CommonUIPage(this.page);
    await Promise.all([
      await expect(commonUIPage.videoPlayer).toHaveAttribute('src', 'https://www.youtube.com/embed/FAedLI20kV8?autoplay=1&mute=1'),
      await expect(commonUIPage.videoPlayer).toHaveAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'),
      ]);
  }

  async verifyContactInfo() {
    await Promise.all([
      await expect(this.contactUs_TXT).toBeVisible(),
      await expect(this.phone_LK).toHaveAttribute('href', 'tel:+15183371860'),
      await expect(this.email_LK).toHaveAttribute('href', 'mailto:info@orbitax.com'),
      ]);
  }

  async verifyCopyrightInfo() {
    var currentYear = new Date().getFullYear();
    await Promise.all([
      await expect(this.copyright_Text).toBeVisible(),
      await expect(this.copyright_Text).toHaveText(' Copyright © ' + currentYear + ' OrbitaxAll Rights ReservedPrivacy Policy'),
      ]);
  }


  // ********** click Methos **********

  async clickOnFreeProductTour() {
    await Promise.all([
      await expect(this.freeProductTour_BTN).toBeVisible(),
      await expect(this.freeProductTour_BTN).toBeEnabled(),
      await this.copyright_Text.click(),
      ]);
  }
}