import { Selector, fixture } from "testcafe";

fixture `Registration Login Tests`
    .page `https://dev.deepthought.education/register`;  

test('Registration with username and password', async t =>{
    await t
        .typeText('#email', 'printcomkolkata40@gmail.com') 
        .typeText('#username','print')
        .typeText('#password', 'hacker@56340') 
        .typeText(Selector('#password-confirm'),'hacker@56340')
        .click(Selector('.btn'))

        
});
