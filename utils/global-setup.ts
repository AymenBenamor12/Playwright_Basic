
import { expect  ,chromium} from '@playwright/test';

const authFile = 'storageState.json'

async function globalConfig(){
    
    const browser = await chromium.launch();

    const page = await browser.newPage();
    await page.goto('https://qacart-todo.herokuapp.com')
    await page.locator('#email').fill("aymen.benamor@enis.tn")
    await page.locator('[data-testid="password"]').fill("@Aymen123456")
    await page.locator('#submit').click();

    //const welcomeMessage = page.locator('[data-testid="welcome"]')
    //await expect(welcomeMessage).toBeVisible() ;


    await page.context().storageState({ path:authFile,});
       
   
}

    export default globalConfig;



