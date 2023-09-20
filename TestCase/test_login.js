import { Selector,t } from "testcafe";
import { fixture } from "testcafe";

fixture `Login Tests`
    .page `https://dev.deepthought.education/login`;  

test('Login user with valid username and password', async t =>{
    await t
        .typeText('#username', 'soumyajit56340@gmail.com') 
        .typeText('#password', 'Hacker@56340') 
        .click(Selector('.btn'))

        await t.expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok();
});
