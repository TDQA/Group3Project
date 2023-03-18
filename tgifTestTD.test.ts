import { Tgif } from "./tgifPageObjectsTD";
const fs = require('fs')
const tgif = new Tgif()

describe("Should test the functionality of TGIFridays website", () => {
    beforeEach(async () => {
        await tgif.navigate()
    })
    afterAll(async () => {
        await tgif.driver.quit()
    })
    test("Should be able to view menu", async () => {
        await tgif.click(tgif.viewMenu)
        let menuResults = await tgif.getText(tgif.viewMenuResults)
        expect(menuResults).toContain("Limited Time!")

        await fs.writeFile(`${__dirname}/test.txt`, menuResults, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/menuScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
    })
    test("Should be able to view Our Craft page", async () => {
        await tgif.click(tgif.viewOurCraft)
        let craftResults = await tgif.getText(tgif.ourCraftResults)
        expect(craftResults).toContain("OUR CRAFT.")

        await fs.writeFile(`${__dirname}/test.txt`, craftResults, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/craftScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
    })
    test("Should be able to view nearest TGIF locations by zip code", async () => {
        await tgif.click(tgif.viewLocations)
        await tgif.click(tgif.addressField)
        await tgif.setInput(tgif.addressField, "02215")
        await tgif.click(tgif.searchBtn)
        let locationResult = await tgif.getText(tgif.locationResults)
        expect(locationResult).toContain("LOCATION RESULTS")

        await fs.writeFile(`${__dirname}/test.txt`, locationResult, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/locationScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
    })
    test("Should be able to start online order from home page and select menu available from nearest location", async () => {
        await tgif.click(tgif.orderOnline)
        await tgif.click(tgif.nearbyField)
        await tgif.setInput(tgif.nearbyField, "02215\n")
        let orderPage = await tgif.getText(tgif.beginOrder)
        expect(orderPage).toContain("Begin Order")

        await fs.writeFile(`${__dirname}/test.txt`, orderPage, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/orderScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
    })
    test("Should be able to navigate to Gift Card page and check balance", async () => {
        await tgif.click(tgif.viewGiftCards)
        await tgif.click(tgif.checkBalanceBtn)
        let checkBalance = await tgif.getText(tgif.checkBalancePage)
        expect(checkBalance).toContain("CHECK YOUR GIFT CARD BALANCE")

        await fs.writeFile(`${__dirname}/test.txt`, checkBalance, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/giftCardScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })
    })
    test("Should be able to sign up for Rewards Program", async () => {
        await tgif.click(tgif.viewRewards)
        await tgif.click(tgif.signUpBtn)
        await tgif.click(tgif.emailField)
        await tgif.setInput(tgif.emailField, "testing123456789@mmmail.com")
        await tgif.click(tgif.phoneField)
        await tgif.setInput(tgif.phoneField, "1231231234")
        await tgif.click(tgif.firstNameField)
        await tgif.setInput(tgif.firstNameField, "Wednesday")
        await tgif.click(tgif.lastNameField)
        await tgif.setInput(tgif.lastNameField, "Addams")
        await tgif.click(tgif.passwordField)
        await tgif.setInput(tgif.passwordField, "Password123")
        await tgif.click(tgif.confirmPWField)
        await tgif.setInput(tgif.confirmPWField, "Password123")
        await tgif.click(tgif.bdayDay)
        await tgif.click(tgif.bdayDayPick)
        await tgif.click(tgif.bdayMonth)
        await tgif.click(tgif.bdayMonthPick)
        await tgif.click(tgif.bdayYear)
        await tgif.click(tgif.bdayYearPick)
        await tgif.click(tgif.faveLocationField)
        await tgif.click(tgif.locationPick)
        await tgif.click(tgif.agreeTerms)
        let signupSuccess = await tgif.getText(tgif.signupFinish)
        expect(signupSuccess).toContain("TERMS AND CONDITIONS")

        await fs.writeFile(`${__dirname}/test.txt`, signupSuccess, (e) => {
            if (e) console.log(e)
            else console.log('Save Successful')
        })
    
        await fs.writeFile(`${__dirname}/signupSuccessScreenshot.png`,
        await tgif.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Successful')
        })

    })
    
})