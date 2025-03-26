describe("LamdaTest Suite", () => {
 
  it("User Sign Up and Order Product", () => {
    // User enters Personal Details
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    cy.get('input[name="firstname"]').type("Vanessa");
    cy.get('input[name="lastname"]').type("Morgan");
    cy.get('input[type="email"]').type("frgive@mailinator.com"); // Change email if needed for subsequent runs
    cy.get('input[type="tel"]').type("+2348020895412");
    cy.get('input[id="input-password"]').type("20December!");
    cy.get('input[name="confirm"]').type("20December!");

    // Subscribe to newsletter and agree to terms
    cy.get('label[for="input-newsletter-yes"]').click();
    cy.get('label[for="input-agree"]').click();

    // Submit the registration form
    cy.get('input[type="submit"]').click();

    // Navigate back to homepage
    cy.get('a[class="btn btn-primary"]').click();
    cy.get('img[src="https://ecommerce-playground.lambdatest.io/image/catalog/maza/svg/image2vector.svg"]').click();

    // User uses the Search Box and Orders a Product
    cy.get("div[id='entry_217822'] input[placeholder='Search For Products']").type("iPod nano");
    cy.get('button[class="type-text"]').click();
    
    // Select the product from search results
    cy.contains("iPod nano").scrollIntoView().should("be.visible").click();
    
    // Click on the product image and add to cart
    cy.get("a[id='mz-product-grid-image-36-212469'] div[class='carousel-item active'] img[title='iPod Nano']").click();
    
    // Add item to cart and increase quantity
    for (let i = 0; i < 2; i++) {
      cy.get('button[title="Buy now"]').click(); // this increases cart quantity to 2 
    }

    // User Fills in Billing Details Directly
    cy.get('input[id="input-payment-firstname"]').type("David");
    cy.get('input[id="input-payment-lastname"]').type("Jones");
    cy.get('input[id="input-payment-company"]').type("Groot Associates");
    cy.get('input[name="address_1"]').type("50 Lagos Express Way");
    cy.get('input[name="address_2"]').type("55 Lagos Express Way");
    cy.get('input[name="city"]').type("Ikeja");
    cy.get('input[name="postcode"]').type("500102");

    // Select country and zone
    cy.get('#input-payment-country').select("Nigeria");
    cy.get('#input-payment-zone').select("Lagos");

    // Add comment and agree to terms
    cy.get('#input-comment').type("I have always wanted to get an iPod");
    cy.get('label[for="input-agree"]').click();

   // Save billing details
   cy.get('button[id="button-save"]').click();
  
  // Navigate to Home
  cy.get('img[src="https://ecommerce-playground.lambdatest.io/image/catalog/maza/svg/image2vector.svg"]').click();
  // Searches for the product in the Search bar
  cy.get("div[id='entry_217822'] input[placeholder='Search For Products']").type("HP LP3065");
  cy.get('button[class="type-text"]').click()
  cy.get("a[id='mz-product-grid-image-47-212469'] div[class='carousel-item active'] img[title='HP LP3065']").click()
  for (let i = 0; i < 2; i++) {
    cy.get('button[title="Buy now"]').click(); // this increase cart quantity to 2 
  }
  cy.get("div[id='entry_217825'] div[class='icon svg-icon'] svg").click()

});
});
