import { expect, Locator, Page } from '@playwright/test';


export class footerContentPage{

    readonly page: Page;
    readonly myAccount_TXT: Locator;
    readonly orderseturns_LK: Locator;
    readonly emailPreferences_LK: Locator;
    readonly accountSettings_LK: Locator;
    readonly letUsHelp_TXT: Locator;
    readonly contactCustomerCare_LK: Locator;
    readonly shippingInformation_LK: Locator;
    readonly returnPolicy_LK: Locator;
    readonly internationalHelp_LK: Locator;
    readonly accessibility_LK: Locator;
    readonly companyInformation_TXT: Locator;
    readonly aboutOverstock_LK: Locator;
    readonly contactUs_LK: Locator;
    readonly careers_LK: Locator;
    readonly investorRelations_LK: Locator;
    readonly sellYourProducts_LK: Locator;
    readonly supplyChainTransparency_LK: Locator;
    readonly moreWaysToShope_TXT: Locator;
    readonly tipsIdeas_LK: Locator;
    readonly deals_LK: Locator;
    readonly clearance_LK: Locator;
    readonly newArrivals_LK: Locator;
    readonly privacyPolicy_LK: Locator;
    readonly termsConditionss_LK: Locator;
    readonly promotionTerms_LK: Locator;
    readonly shipTo_LK: Locator;
    readonly copyright_TXT: Locator;
    readonly companyAddress_TXT: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccount_TXT = page.locator('.footerLinks__footerLinksWrapper__e0a2af91 > div:nth-of-type(1) > .body-small_-Ylaw', { hasText: 'MY ACCOUNT' });
        this.orderseturns_LK = page.locator('[data-tid="FOOT:MA:MO"] > .body-small_-Ylaw', { hasText: 'Orders & Returns' });
        this.emailPreferences_LK = page.locator('[data-tid="FOOT:MA:EMAILPREF"] > .body-small_-Ylaw', { hasText: 'Email Preferences' });
        this.accountSettings_LK = page.locator('[data-tid="FOOT:MA:AS"] > .body-small_-Ylaw', { hasText: 'Account Settings' });
        this.letUsHelp_TXT = page.locator('.footerLinks__footerLinksWrapper__e0a2af91 > div:nth-of-type(2) > .body-small_-Ylaw', { hasText: 'LET US HELP' });
        this.contactCustomerCare_LK = page.locator('[href="//help.overstock.com/help/s/article/International-Customer-Care"] > .body-small_-Ylaw', { hasText: 'Contact Customer Care' });
        this.shippingInformation_LK = page.locator('xpath=//span[.="Shipping Information"]', { hasText: 'Shipping Information' });
      }


      
}