import { browser, by, entry } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return entry(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
