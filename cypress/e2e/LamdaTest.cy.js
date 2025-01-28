describe("LamdaTest Suite", () => {
  it("User Sign Up", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    )

    //User enters Personal Details
    cy.get('input[name="firstname"]').type("Vanessa");
    cy.get('input[name="lastname"]').type("Morgan");
    cy.get('input[type="email"]').type("forgive@mailinator.com"); 
    // if you run into an error on your run, you will have to change the email to proceed for the next run
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
  cy.get("div[id='entry_217822'] input[placeholder='Search For Products']").type('iPod nano');
  cy.get('button[class="type-text"]').click()
  cy.contains('iPod nano').scrollIntoView().should('be.visible').click()
  cy.get("a[id='mz-product-grid-image-36-212469'] div[class='carousel-item active'] img[title='iPod Nano']").click()
  cy.get('button[title="Buy now"]').click() // This adds the item to cart
  cy.get('button[title="Buy now"]').click() // This increases the cart quantity to 2 by clicking the button again

  // User Fills in Billing Details 
  cy.get('input[id="input-payment-firstname"]').type('David')
  cy.get('input[id="input-payment-lastname"]').type('Jones')
  cy.get('label[for="input-payment-company"]').type('Groot Associates')
  cy.get('input[name="address_1"]').type('50 Lagos Express Way')
  cy.get('input[name="address_2"]').type('55 Lagos Express Way')
  cy.get('label[for="input-payment-city"]').type('Ikeja')
  cy.get('input[name="postcode"]').type('500102')
  cy.get('#input-payment-country').select('Nigeria')
  cy.get('#input-payment-zone').select('Lagos')
  cy.get('#input-comment').type('I have always wanted to get an iPod') // Adds a comment about the order 
  cy.get('label[for="input-agree"]').click();
  cy.get('button[id="button-save"]').click()
});
})