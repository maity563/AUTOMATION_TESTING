import { Selector, fixture } from "testcafe";

fixture `Login Tests`
    .page `https://dev.deepthought.education/login`;  

    test('Unsuccessful Login - Empty Fields', async t => {
        await t
            .click(Selector('.btn')) 
    
            await t.expect(Selector('#login-error-notify').exists).ok(); 
    });
    
    