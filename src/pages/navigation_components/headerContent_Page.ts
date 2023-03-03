import { expect, Locator, Page } from '@playwright/test';


export class HeaderContentPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly search_IN: Locator;
  readonly search_BTN: Locator;
  readonly account_BTN: Locator;
  readonly list_BTN: Locator;
  readonly cart_BTN: Locator;
  readonly furniture_TAB: Locator;
  readonly rugs_TAB: Locator;
  readonly decor_TAB: Locator;
  readonly bedding_TAB: Locator;
  readonly homeImprovement_TAB: Locator;
  readonly kitchen_TAB: Locator;
  readonly outdoor_TAB: Locator;
  readonly lighting_TAB: Locator;
  readonly kidsBaby_TAB: Locator;
  readonly more_TAB: Locator;
  readonly ideas_TAB: Locator;
  readonly salesDeals_TAB: Locator;




  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.navbar-brand').first();
    this.brandName_TXT = page.locator('.navbar-brand-name', { hasText: 'Global Tax Technology Experts' });
    this.home = page.getByRole('link', { name: 'Home' });
    this.solutions = page.locator('#offcanvasExample').getByText('Solutions');
    this.company = page.locator('#offcanvasExample').getByText('Company');
    this.newsletter = page.locator('#offcanvasExample').getByText('Newsletter');
    this.contact = page.locator('#offcanvasExample').getByText('Contact');
    this.login_BTN = page.getByRole('link', { name: 'Home' });
    this.createAccount_BTN = page.getByRole('link', { name: 'Create Account' });
  }

  // ********** Verify Methos **********

  async verifyContactsTabSelected() {
    await Promise.all([
      await expect(this.contact_TAB).toHaveClass('active nav-link'),
    ]);

  }

  async verifyContactInfo() {
    await Promise.all([
      await expect(this.contactUs_TXT).toBeVisible(),
      await expect(this.phone_LK).toHaveAttribute('href', 'tel:+15183371860'),
      await expect(this.email_LK).toHaveAttribute('href', 'mailto:info@orbitax.com'),
    ]);
  }

  // ********** Other Methos **********

  async sendMessage() {
    await Promise.all([
      // Input First Name
      await expect(this.firstName_IN).toBeVisible(),
      await expect(this.firstName_IN).toBeEditable(),
      await this.firstName_IN.type('Hello'),

      // Input Last Name
      await expect(this.lastName_IN).toBeVisible(),
      await expect(this.lastName_IN).toBeEditable(),
      await this.lastName_IN.type('GGG'),

      // Input Email Address
      await expect(this.emailAddress_IN).toBeVisible(),
      await expect(this.emailAddress_IN).toBeEditable(),
      await this.emailAddress_IN.type('GGG@gg.com'),

      // Input Company
      await expect(this.company_IN).toBeVisible(),
      await expect(this.company_IN).toBeEditable(),
      await this.company_IN.type('Orbitax Test'),

      // Input Phone Number
      await expect(this.phoneNumber_IN).toBeVisible(),
      await expect(this.phoneNumber_IN).toBeEditable(),
      await this.phoneNumber_IN.type('456345345'),

      // Input Message
      await expect(this.yourMessage_IN).toBeVisible(),
      await expect(this.yourMessage_IN).toBeEditable(),
      await this.yourMessage_IN.type('Hi Hello Welcome'),

      // Click on Robot captcha
      await this.robot_CB.click(),

      // await expect(this.phone_LK).toHaveAttribute('href', 'tel:+15183371860'),
      // await expect(this.email_LK).toHaveAttribute('href', 'mailto:info@orbitax.com'),
    ]);
  }



}