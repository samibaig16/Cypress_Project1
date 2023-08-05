/// <reference types ="cypress"/>
import testObjects from "../../pageObjects/testPageObjects";
const testObject =new testObjects();
describe('Signup and Edit Profile', () => {
    it('Signup and Edit Profile', () =>{
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Create an Account').click()
        // cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type("Sami")
        cy.get('#lastname').type("Tester")
        cy.get(testObject.signupemail).type("samibaigtester116652509@gmail.com")
        cy.get('#password').type("Samitester12@")
        cy.get('#password-confirmation').type("Samitester12@")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success > div').contains('Thank you for registering with Main Website Store.')
        cy.get('.box-billing-address > .box-actions > .action > span').click()
        cy.get('#street_1').type("C119999 Rufi Apartment")
        cy.get('#street_2').type('Gulistan e Johar')
        cy.get('#street_3').type('Block 2')
        cy.get('#city').type('Karachi')
        cy.get('#country').select('Pakistan')
        cy.get('#region').type('Sindh')
        cy.get('#zip').type('75290')
        cy.get('#company').type('XYZ PvT Ltd.')
        cy.get('#telephone').type('03132005511')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
    })

})

describe('Login and Search Product', () =>{
    it('Login and Search Product', () =>{
        // cy.viewport(1366, 768);
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .greet > .not-logged-in',{ timeout: 80000 }).contains('Default welcome msg!')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get(testObject.email).type("samibaigtester116652509@gmail.com")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Samitester12@")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('#search').type('mens t-shirt').type('{enter}')
        cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.wait(2000)
        cy.get('#option-label-size-143-item-170', { timeout: 80000 }).click()
        cy.wait(1000)
        cy.get('#option-label-color-93-item-56', { timeout: 80000 }).click()
        
        cy.get('#product-addtocart-button', { timeout: 80000 }).click()
        cy.get('.message-success > div > a', { timeout: 80000 }).click()
        cy.wait(3000)
        cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
        cy.get('.button > span', { timeout: 80000 }).click();
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
        cy.get('.checkout-success > .actions-toolbar > div.primary > .action').click()
    
        // cy.get('.swatch-opt-526 > .size > .swatch-attribute-options > #option-label-size-143-item-170').click()
        // cy.get('.swatch-opt-526 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-53').click()
        // cy.get('.products > :nth-child(2)').trigger('mouseover').contains('Add to Cart').click()
     // Hover over the element
        
    
    })

})

// it('should open gmail' , () => {
//     cy.visit("https://mail.google.com/")
//     cy.contains('Create account').click()
//     // <span jsname="K4r5Ff" class="VfPpkd-StrnGf-rymPhb-b9t22c">For my personal use</span>
//     // cy.contains('For my personal use').click()
//     cy.get("#firstName").type("Sami")
//     cy.wait(1000)
//     cy.get("#lastName").type("Baig")
//     cy.contains("Next").click()
//     cy.get('#day').type('10');
//     cy.get('#month').select('June')
//     cy.get('#year').type('2002')
//     cy.get('#gender').select('1')
//     cy.get('span.VfPpkd-vQzf8d').contains('Next').click()
//     cy.get('input[aria-label="Username"]').type('samitester0044');
//     cy.contains("Next").click()
//     cy.get('input[aria-label="Password"]').type('samitester1234');
//     cy.get('input[aria-label="Confirm"]').type('samitester1234');
//     cy.contains("Next").click()
//     // cy.get('div.t5nRo.Id5V1 div.wEIpqb.nQOrEb').click()

// })