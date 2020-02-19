
let homepage =function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstno){
        firstNumber_input.sendKeys(firstno);
    };

    this.enterSecondNumber = function(secondno){
        secondNumber_input.sendKeys(secondno);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result))
        expect(output.getText()).toEqual(result);
    }

    browser.sleep(2000)


};

module.exports = new homepage