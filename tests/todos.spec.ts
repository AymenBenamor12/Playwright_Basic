import {test,expect} from '@playwright/test'

test.describe("todo page test cases", ()=>{
  
  test.use({
    storageState:'.storageState.json'
  })
   test.beforeEach(async ({page})=>{
    await page.goto('https://qacart-todo.herokuapp.com')
  //await page.locator('#email').fill("aymen.benamor@enis.tn")
  //await page.locator('[data-testid="password"]').fill("@Aymen123456")
    //await page.locator('#submit').click();
   })

    test("should be able to mark a todo as completed",async({page})=>{
    
      await page.locator('[data-testid="add"]').click();
        await page.locator('[data-testid="new-todo"]').fill('Learn Playwright');
        await page.locator('[data-testid="submit-newTask"]').click();
        await page.locator('[data-testid="complete-task"]').nth(0).click();
        const todoItem = page.locator('[data-testid="todo-item"]').nth(0);
        await expect(todoItem).toHaveCSS("background-color","rgb(33, 76, 97)");
    })
    

    test("welcome message should be displayed ",async({page})=>{
     
    
       
        const welcomemessage = page.locator('[data-testid="welcome"]');
        await expect(welcomemessage).toBeVisible();
    
    
})

    
})