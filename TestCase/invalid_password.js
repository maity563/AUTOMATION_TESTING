import { Selector, fixture } from "testcafe";

fixture `Login Tests`
    .page `https://dev.deepthought.education/login`;  

test('Invalid password', async t =>{
    await t
        .typeText(Selector('#username'), 'soumyajit56340@gmail.com') 
        .typeText(Selector('#password'), 'Hac6340') 
        .click(Selector('.btn'))

        await t.expect(Selector('#login-error-notify').exists).ok();
});
