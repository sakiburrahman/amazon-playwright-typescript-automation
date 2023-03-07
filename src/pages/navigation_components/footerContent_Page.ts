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
        this.returnPolicy_LK = page.locator('[href="//help.overstock.com/help/s/article/International-Returns"] > .body-small_-Ylaw', { hasText: 'Return Policy' });
        this.internationalHelp_LK = page.locator('[href="//help.overstock.com/help/s/article/International-Help-Home"] > .body-small_-Ylaw', { hasText: 'International Help' });
        this.accessibility_LK = page.locator('[href="/accessibility"]', { hasText: 'Accessibility' });
        this.companyInformation_TXT = page.locator('.footerLinks__footerLinksWrapper__e0a2af91 > div:nth-of-type(3) > .body-small_-Ylaw', { hasText: 'COMPANY INFORMATION' });
        this.aboutOverstock_LK = page.locator('[href="/about"] > .body-small_-Ylaw', { hasText: 'About Overstock™' });
        this.contactUs_LK = page.locator('[href="/contact-us"] > .body-small_-Ylaw', { hasText: 'Contact Us' });
        this.careers_LK = page.locator('[href="/careers"] > .body-small_-Ylaw', { hasText: 'Careers' });
        this.investorRelations_LK = page.locator('[href="http://investors.overstock.com/events"] > .body-small_-Ylaw', { hasText: 'Investor Relations' });
        this.sellYourProducts_LK = page.locator('[href="//overstock.az1.qualtrics.com/jfe/form/SV_4TKJSQDaj6oDHE1 "] > .body-small_-Ylaw', { hasText: 'Sell Your Products' });
        this.supplyChainTransparency_LK = page.locator('[data-tid="FOOT:CI:SI"] > .body-small_-Ylaw', { hasText: 'Supply Chain Transparency' });
        this.moreWaysToShope_TXT = page.locator('.footerLinks__footerLinksWrapper__e0a2af91 > .footerLinks__sectionContainer__3ecdd486 > .footerLinks__sectionContainer__3ecdd486 > .body-small_-Ylaw', { hasText: 'MORE WAYS TO SHOP' });
        this.tipsIdeas_LK = page.locator('[data-tid="FOOT:SHOP:TIPS"] > .body-small_-Ylaw', { hasText: 'Tips & Ideas' });
        this.deals_LK = page.locator('[data-tid="FOOT:SHOP:DEALS"] > .body-small_-Ylaw', { hasText: 'Deals' });
        this.clearance_LK = page.locator('[data-tid="FOOT:SHOP:CLEARANCE"] > .body-small_-Ylaw', { hasText: 'Clearance' });
        this.newArrivals_LK = page.locator('[data-tid="FOOT:SHOP:NEWARRIVALS"] > .body-small_-Ylaw', { hasText: 'New Arrivals' });
        this.privacyPolicy_LK = page.locator('.legalContainer__mobileHidden__16337b23[href="//help.overstock.com/help/s/article/PRIVACY-AND-SECURITY-POLICY"] > .body-small_-Ylaw', { hasText: 'Privacy Policy' });
        this.termsConditionss_LK = page.locator('.legalContainer__mobileHidden__16337b23[href="//help.overstock.com/help/s/article/TERMS-AND-CONDITIONS"] > .body-small_-Ylaw', { hasText: 'Terms & Conditions' });
        this.promotionTerms_LK = page.locator('[data-tid="FOOT:CS:PT"] > .body-small_-Ylaw', { hasText: 'Promotion Terms' });
        this.shipTo_LK = page.locator('[href="/intlcountryselect"] > .body-small_-Ylaw', { hasText: 'Ship to:' });
        this.copyright_TXT = page.locator('.legalContainer__companyInfo__ebbd590c > p:nth-of-type(1)', { hasText: '© Copyright 2023, Overstock.com®, Inc.' });
        this.companyAddress_TXT = page.locator('p:nth-of-type(2)', { hasText: '799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446' });



      }


      
}