import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Tgif extends BasePage {
    // View menu selectors
    viewMenu: By = By.className("et_pb_menu_page_id-86202 menu-item menu-item-type-custom menu-item-object-custom menu-item-86202");
    viewMenuResults: By = By.xpath('(//h3[@class="_headingH2"])[1]');
    // View Craft page selectors
    viewOurCraft: By = By.className("et_pb_menu_page_id-1797 menu-item menu-item-type-post_type menu-item-object-page menu-item-1995");
    ourCraftResults: By = By.xpath('//h2[text()="OUR CRAFT."]');
    // Finding Nearest Location selectors
    viewLocations: By = By.className("et_pb_menu_page_id-580 menu-item menu-item-type-custom menu-item-object-custom menu-item-580");
    addressField: By = By.name("address");
    searchBtn: By = By.className("find-btn btn btn-default");
    locationResults: By = By.xpath('//h1[text()="Location Results"]');
    // Signing up for Rewards Program selectors
    viewRewards: By = By.className("et_pb_menu_page_id-875 menu-item menu-item-type-post_type menu-item-object-page menu-item-940");
    signUpBtn: By = By.xpath('//a[text()="sign up"]');
    signUpPage: By = By.xpath(('//label[text()="Email *"]'));
    phoneField: By = By.name("user[phone]");
    firstNameField: By = By.name("user[first_name]");
    lastNameField: By = By.name("user[last_name]");
    passwordField: By = By.name("user[password]");
    confirmPWField: By = By.name("user[password_confirmation]");
    bdayDay: By = By.name("user[birthday(3i)]");
    bdayDayPick: By = By.xpath('//option[text()="8"]')
    bdayMonth: By = By.name("user[birthday(2i)]");
    bdayMonthPick: By = By.xpath('//option[text()="February"]')
    bdayYear: By = By.name("user[birthday(1i)]");
    bdayYearPick: By = By.xpath('//option[text()="2000"]');
    faveLocationField: By = By.name("user[fav_location_id]");
    locationPick: By = By.xpath('//option[text()="Bayshore"]')
    agreeTerms: By = By.id("user_terms_and_conditions");
    submitSignUpBtn: By = By.name("commit");
    signupFinish: By = By.xpath('//a[text()="Terms and Conditions"]')
    // Order online selectors
    orderOnline: By = By.className("et_pb_menu_page_id-1348 menu-item menu-item-type-custom menu-item-object-custom menu-item-1348");
    nearbyField: By = By.name("vendor-search-nearby");
    emailField: By = By.name("user[email]");
    beginOrder: By = By.xpath('//span[text()="Begin Order"]');
    // Check Gift Card Balance selectors
    viewGiftCards: By = By.className("et_pb_menu_page_id-578 menu-item menu-item-type-post_type menu-item-object-page menu-item-581");
    checkBalanceBtn: By = By.className("et_pb_module et_pb_code et_pb_code_1 gift_card_button et_clickable et_pb_section_video_on_hover  et_pb_text_align_center")
    checkBalancePage: By = By.xpath('//h1[text()="Check Your Gift Card Balance"]')

    constructor() {
        super({url: 'https://tgifridays.com/'})
    }


}