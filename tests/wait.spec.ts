
import {test, expect} from '@playwright/test'

test.describe("Locators  " , ()=>{

    test('should be able to click on the submit button tag name',async({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/')
        //await page.waitForURL("")
        
        await page.locator('#email').fill("aymen.bnamor96@gmail.com")
        await page.locator('[data-testid="password"]').fill("123456")
        const submitButton= page.locator('button:has-text("Login")');
        //await page.waitForTimeout(3000) //hardwait
        await submitButton.waitFor({
            state:'visible',
            timeout:60000
        })
        
        await submitButton.click();
        await expect(page).toHaveTitle("Qacart Todo App - Todos page",{
            timeout: 60000
        })
       
    })


})