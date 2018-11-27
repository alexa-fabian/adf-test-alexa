// spec.js

describe('ADF Demo App', function () {

    it('test', function () {
        browser.get('http://qaexercise.envalfresco.com/settings');
        browser.sleep(5000);
        element(by.xpath('//*[@id="host-form"]/mat-form-field/div/div[1]/div')).click();
        element(by.xpath('//*[@id="mat-option-1"]/span')).click();
        newFunction();
    });

    function newFunction() {
        element(by.xpath('//*[@id="host-button"]')).click();
        element(by.xpath('//*[@id="username"]')).sendKeys('guest@example.com');
        element(by.xpath('//*[@id="password"]')).sendKeys('Password');
        element(by.xpath('//*[@id="login-button"]')).click();
        browser.sleep(5000);
        browser.get('http://qaexercise.envalfresco.com/files');
        browser.sleep(5000);
        element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();
        element(by.xpath('//*[@id="adf-folder-name-input"]')).sendKeys('alexa-fabian');
        element(by.xpath('//*[@id="adf-folder-create-button"]')).click();
        browser.sleep(5000);
        element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]')).click();
        element(by.xpath('//*[@id="adf-folder-name-input"]')).sendKeys('alexa-fabian');
        element(by.xpath('//*[@id="adf-folder-create-button"]')).click();
        browser.sleep(5000);      
        element(by.xpath('//*[@id="adf-folder-cancel-button"]')).click();
        var input = element(by.xpath('//*[@id="adf-header"]/mat-toolbar/app-search-bar/adf-search-control/div/div/mat-form-field'));
        browser.actions().click(input).sendKeys('alexa-fabian').perform();
        element(by.xpath('//*[@id="action_menu_right_0"]')).click();
        browser.sleep(5000); 
        element(by.css('#cdk-overlay-4 > div > div > button:nth-child(5)')).click();
    };
});