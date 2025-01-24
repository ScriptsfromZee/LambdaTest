describe("LamdaTest Suite", () => {
  it("User Sign Up", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    )

    //User enters Personal Details
    cy.get('input[name="firstname"]').type("David");
    cy.get('input[name="lastname"]').type("Jones");
    cy.get('input[type="email"]').type("Zeek@mailinator.com");
    cy.get('input[type="tel"]').type("+2348020895412");
    cy.get('input[id="input-password"]').type("20December!");
    cy.get('input[name="confirm"]').type("20December!");
    cy.get('label[for="input-newsletter-yes"]').click();
    cy.get('label[for="input-agree"]').click();
    cy.get('input[type="submit"]').click();
    cy.get('a[class="btn btn-primary"]').click();
    cy.get(
      'img[src="https://ecommerce-playground.lambdatest.io/image/catalog/maza/svg/image2vector.svg"]'
    ).click(); // This clicks on the Logo taking the user back to the homepage 

  // User uses the Search Box and Orders a Product
  cy.get('input[name="search"]').type('ipad Nano')
  cy.get('button[type="submit"]').click()
  cy.contains('ipad Nano').scrollIntoView().should('be.visible').click()
  cy.get("div[id='entry_216841'] i[class='fas fa-plus-circle']").click()
  cy.get("div[id='entry_216841'] i[class='fas fa-plus-circle']").click()
  cy.get('button[title="Buy now"]').click()

  // User Fills in Billing Details 
  cy.get('input[id="input-payment-firstname"]').type('David')
  cy.get('input[id="input-payment-lastname"]').type('Jones')
  cy.get('label[for="input-payment-company"]').type('Groot Associates')
  cy.get('input[name="address_1"]').type('50 Lagos Express Way')
  cy.get('input[name="address_2"]').type('55 Lagos Express Way')
  cy.get('label[for="input-payment-city"]').type('Ikeja')
  cy.get('input[name="postcode"]').type('500102')
  cy.get('label[for="input-payment-country"]').select('Nigeria')
  cy.get('select[id="input-payment-zone"]').select('Lagos')
  cy.get('text area[id="input-comment"]').type('I have always wanted to get an Ipod')
  cy.get(
    'a[href="https://ecommerce-playground.lambdatest.io/index.php?route=information/information/agree&information_id=5"]'
  ) .click()
  cy.get('button[id="button-save"]').click()
});
});