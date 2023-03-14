import By "selenium-webdriver"
import {BasePage} from (./basePage)

export class tgif extends BasePage{}

viewMenu: By = By.className("et_pb_menu_page_id-86202 menu-item menu-item-type-custom menu-item-object-custom menu-item-86202");
viewMenuResults: By = By.xpath('(//h3[@class="_headingH2"])[1]');
viewOurCraft: By = By.className("et_pb_menu_page_id-1797 menu-item menu-item-type-post_type menu-item-object-page menu-item-1995");
viewLocation: By = By.className("et_pb_menu_page_id-580 menu-item menu-item-type-custom menu-item-object-custom menu-item-580");
addressField: By = By.name("address");
searchBTN: By = By.className("find-btn btn btn-default");
viewRewards: By = By.className("et_pb_menu_page_id-875 menu-item menu-item-type-post_type menu-item-object-page menu-item-940");
signBTN: By = By.xpath('//a[text()="sign up"]');
orderOnline: By = By.className("et_pb_menu_page_id-1348 menu-item menu-item-type-custom menu-item-object-custom menu-item-1348");
nearbyField: By = By.name("vendor-search-nearby");
nearbyBTN: By = By.className("_button_7o22y9 _softDisabled_7o22y9 _size-500_7o22y9 _submit_1dx6vg _row_1dx6vg");

const() {
    super({url: "https://tgif.com"})
}
