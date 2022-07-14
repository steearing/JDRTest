

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ArticlesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fieldFeed () {
        return $('*//div[1]/div/ul/li[1]/a');
    }

    get fieldAlertEmail () {
        return $('li=email can\'t be blank');
    }

    get fieldAlertPass () {
        return $('li=password can\'t be blank');
    }

    get fieldAlert () {
        return $('li=email or password is invalid');
    }


}

module.exports = new ArticlesPage();
