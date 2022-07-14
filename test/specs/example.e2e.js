const SignInPage = require('../pageobjects/SignIn.page');
const ArticlesPage = require('../pageobjects/articles.page');

describe('My Login application',  () => {
    it('should login with valid credentials',  async () => {
        await SignInPage.open();

        await SignInPage.login('jrdtest2@yopmail.com', '123456789');
        await expect(ArticlesPage.fieldFeed).toBeExisting();
    });

    it('should login with invalid credentials', async () => {
        await browser.reloadSession();
        await SignInPage.open();

        await SignInPage.login('jrdtest3@yopmail.com', '123456789');
        await expect(ArticlesPage.fieldAlert).toBeExisting();
    });

    it('should login with no password', async () => {
        await browser.reloadSession();
        await SignInPage.open();

        await SignInPage.login('jrdtest2@yopmail.com', '');
        await expect(ArticlesPage.fieldAlertPass).toBeExisting();
    });

    it('should login with no email', async () => {
        await browser.reloadSession();
        await SignInPage.open();

        await SignInPage.login('', '12387676');
        await expect(ArticlesPage.fieldAlertEmail).toBeExisting();
    })
});


