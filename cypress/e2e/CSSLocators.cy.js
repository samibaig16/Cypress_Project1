describe('Signup',function() {
it('Signup', function(){
    cy.visit("https://adactinhotelapp.com/index.php")
    cy.contains('New User Register Here').click()
    cy.get("#username").type("testertester11")
    cy.get("#password").type("helloworld")
    cy.get("#re_password").type("helloworld")
    cy.get("#full_name").type("Mirza SamiUllah Baig")
    cy.get("#email_add").type("samibaig21000@gmail.com")
    cy.wait(6000)
    cy.get("#tnc_box").click()
    cy.get("#Submit").click()
    cy.wait(2000)


})
})

describe('Login',function() {
  it('Login', function(){
    cy.visit("https://adactinhotelapp.com/")
    cy.get("#username").type("samibaig16")
    cy.get("#password").type("89O570")
    cy.get("#login").click()
    cy.get(".welcome_menu").contains("Welcome to Adactin Group of Hotels")
  
  
  })
  })

  describe('LoginandSearch',function() {
    it('LoginandSearch', function(){
      cy.visit("https://adactinhotelapp.com/")
      cy.get("#username").type("samibaig16")
      cy.get("#password").type("89O570")
      cy.get("#login").click()
      cy.get(".welcome_menu").contains("Welcome to Adactin Group of Hotels")
      cy.get("#location").select("Sydney")
      cy.get("#hotels").select("Hotel Creek")    
      cy.get("#room_type").select("Standard")
      cy.get("#room_nos").select("4 - Four")
      cy.get("#datepick_in").clear()
      cy.get("#datepick_in").type("28/05/2023")
      cy.get("#datepick_out").clear()
      cy.get("#datepick_out").type("05/06/2023")
      cy.get("#adult_room").select("4 - Four")
      cy.get("#child_room").select("3 - Three")
      cy.get("#Submit").click()
    
    
    })
    })



describe('SearchandSelect', () => {
  it('SearchandSelect', () => {
      cy.visit("https://adactinhotelapp.com/")
      cy.get("#username").type("samibaig16")
      cy.get("#password").type("89O570")
      cy.get("#login").click()
      cy.get(".welcome_menu").contains("Welcome to Adactin Group of Hotels")
      cy.get("#location").select("Sydney")
      cy.get("#hotels").select("Hotel Creek")    
      cy.get("#room_type").select("Standard")
      cy.get("#room_nos").select("4 - Four")
      cy.get("#datepick_in").clear()
      cy.get("#datepick_in").type("28/05/2023")
      cy.get("#datepick_out").clear()
      cy.get("#datepick_out").type("05/06/2023")
      cy.get("#adult_room").select("4 - Four")
      cy.get("#child_room").select("3 - Three")
      cy.get("#Submit").click()
    })
  })

  describe('Select and Book', () => {
    it('Select and Book', () => {
      cy.visit("https://adactinhotelapp.com/")
      cy.get("#username").type("samibaig16")
      cy.get("#password").type("89O570")
      cy.get("#login").click()
      cy.get(".welcome_menu").contains("Welcome to Adactin Group of Hotels")
      cy.get("#location").select("Sydney")
      cy.get("#hotels").select("Hotel Creek")    
      cy.get("#room_type").select("Standard")
      cy.get("#room_nos").select("4 - Four")
      cy.get("#datepick_in").clear()
      cy.get("#datepick_in").type("28/05/2023")
      cy.get("#datepick_out").clear()
      cy.get("#datepick_out").type("05/06/2023")
      cy.get("#adult_room").select("4 - Four")
      cy.get("#child_room").select("3 - Three")
      cy.get("#Submit").click()
      cy.wait(2000)
      cy.get("#radiobutton_0").click()
      cy.get("#continue").click()


      cy.get("#first_name").type("Sami")
      cy.get("#last_name").type("Baig")
      cy.get("#address").type("Johar Block 2 ")
      cy.get("#cc_num").type("4782-7800-0001-1145")
      cy.get("#cc_type").select("VISA")
      cy.get("#cc_exp_month").select("June")
      cy.get("#cc_exp_year").select("2027")
      cy.get("#cc_cvv").type("415")
      cy.get("#book_now").click()
      cy.wait(7000)
      
      cy.get("#my_itinerary").click()
      const checkboxValue = '851327'; // The value of the checkbox you want to click

      cy.get('input[name="ids[]"]')
        .filter(`[value="${checkboxValue}"]`) // Filter elements based on the desired value
        .click();

        const checkboxValue2 = '851329'; // The value of the checkbox you want to click
        cy.get('input[name="ids[]"]')
          .filter(`[value="${checkboxValue2}"]`) // Filter elements based on the desired value
          .click()
          const checkboxValue3 = '851330'; // The value of the checkbox you want to click
          cy.get('input[name="ids[]"]')
            .filter(`[value="${checkboxValue3}"]`) // Filter elements based on the desired value
            .click()
      cy.wait(2000)
      cy.scrollTo('bottom')
      cy.get('input[name="cancelall"]').click();
      cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(true); // Return true to simulate clicking "OK" in the confirmation dialog
      })
      cy.get("#search_hotel").click()
    })
  })
      //room_type
      //room_nos
      //datepick_in
      //datepick_out
      //adult_room
      //child_room  