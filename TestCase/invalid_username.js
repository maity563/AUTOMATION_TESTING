import { Selector, fixture } from "testcafe";

fixture `Login Tests`
    .page `https://dev.deepthought.education/login`;  

test('Login user with Invalid Username', async t =>{
    await t
        .typeText(Selector('#username'), 'soumyajit56@gmail.com') 
        .typeText(Selector('#password'), 'Hacker@56340') 
        .click(Selector('.btn'))

        await t.expect(Selector('#login-error-notify').exists).ok();
});
