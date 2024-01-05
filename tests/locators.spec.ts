
import {test, expect} from '@playwright/test'

test.describe("Locators  " , ()=>{


    test('header should be visible by text',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
   
   // BY TEXT
    const header= page.locator('text="Login to Application"')
    await expect(header).toBeVisible();
    
})
test('header should contain the correct text',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
   const header= page.locator('.header')
  
   //Class Name '.header'

   await expect(header).toHaveText('Login to Application')
    
})

test(' should be able to fill the email ',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
   const emailField= page.locator('#email')
   //By ID '#email'
   await emailField.fill("aymen.bnamor96@gmail.com")
    await expect(emailField).toHaveValue("aymen.bnamor96@gmail.com")
})

test(' should be able to fill the password by attribute',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
   const passwordField= page.locator('[data-testid="password"]')
   //By attribute '[data-testid="password"]'
   await passwordField.fill("123456")
   //await  page.pause();
   await expect(passwordField).toHaveValue("123456")
})

test(' should be able to fill the password by xpath ',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
   const passwordField= page.locator('//input[@data-testid="password"]')
   //By xpath  '//tagName[attribute = "value"]'
   //By xpath   //input[@data-testid="password"]
   await passwordField.fill("123456")
   await expect(passwordField).toHaveValue("123456")
})

test('should be able to click on the submit button tag name',async({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com/')
    await page.locator('#email').fill("aymen.benamor@enis.tn")
    await page.locator('[data-testid="password"]').fill("@Aymen123456")
    const submitButton= page.locator('#submit');
    await submitButton.click();
    await expect(page).toHaveTitle("QAcart Todo App - Todos page")
   
})

})