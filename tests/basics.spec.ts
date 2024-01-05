import {test, expect} from '@playwright/test'

test.describe("Login test Cases " , ()=>{

    // test.beforeAll(()=>{
    //     console.log("I am inside the before All ")
    // })
    // test.afterAll(()=>{
    //     console.log("I am inside the After All ")
    // })
    // test.beforeEach(()=>{
    //     console.log("I am inside the before Each ")
    // })
    // test.afterEach(()=>{
    //     console.log("I am inside the Afetr Each ")
    // })


    // test.only("should have the correct title",async()=>{
    //     console.log("I am inside test case 1 ")
    //  })
     
    //  test.skip("should have the correct URL",async()=>{
    //      console.log("I am inside test case 2 ")
    //  })

    test("should have the correct title",async({page})=>{
     
        //Open the Page
     await page.goto('https://qacart-todo.herokuapp.com/')
     
     await expect(page).toHaveTitle("QAcart Todo App - Login page")
     
     //"toHaveTitle" is return promise , all things  returned promise , we should write await before the ligne of code 
     
     //const title =await  page.title()
     //console.log(title);
    });
    test('should have the correct URL',async({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com/')
        await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/")
        
        //const url = await page.url()
       //console.log(url)
    })

})
