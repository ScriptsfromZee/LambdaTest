describe("LamdaTest Suite", () => {
  const user = {
    firstName: "Vanessa",
    lastName: "Morgan",
    email: "hive@mailinator.com", // Change email if needed for subsequent runs
    phone: "+2348020895412",
    password: "20December!",
    billing: {
      firstName: "David",
      lastName: "Jones",
      company: "Groot Associates",
      address1: "50 Lagos Express Way",
      address2: "55 Lagos Express Way",
      city: "Ikeja",
      postcode: "500102",
      country: "Nigeria",
      zone: "Lagos",
      comment: "I have always wanted to get an iPod because my folks could not afford one"
    }  
  }

  beforeEach(() => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
  });

  it("User Sign Up", () => {
    // User enters Personal Details
    cy.get('input[name="firstname"]').type(user.firstName);
    cy.get('input[name="lastname"]').type(user.lastName);
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="tel"]').type(user.phone);
    cy.get('input[id="input-password"]').type(user.password);
    cy.get('input[name="confirm"]').type(user.password);
    
    // Subscribe to newsletter and agree to terms
    cy.get('label[for="input-newsletter-yes"]').click();
    cy.get('label[for="input-agree"]').click();
    
    // Submit the registration form
    cy.get('input[type="submit"]').click();
    
    // Navigate back to homepage
    cy.get('a[class="btn btn-primary"]').click();
    cy.get('img[src="https://ecommerce-playground.lambdatest.io/image/catalog/maza/svg/image2vector.svg"]').click();

    // User uses the Search Box and Orders a Product
    cy.get("div[id='entry_217822'] input[placeholder='Search For Products']").type('iPod nano');
    cy.get('button[class="type-text"]').click();
    
    // Select the product from search results
    cy.contains('iPod nano').scrollIntoView().should('be.visible').click();
    
    // Click on the product image and add to cart
    cy.get("a[id='mz-product-grid-image-36-212469'] div[class='carousel-item active'] img[title='iPod Nano']").click();
    cy.get('button[title="Buy now"]').click(); // Add first item to cart
    cy.get('button[title="Buy now"]').click(); // Increase quantity to 2

    // User Fills in Billing Details 
    fillBillingDetails(user.billing);
  });

  const fillBillingDetails = (billing) => {
    cy.get('input[id="input-payment-firstname"]').type(billing.firstName);
    cy.get('input[id="input-payment-lastname"]').type(billing.lastName);
    cy.get('label[for="input-payment-company"]').type(billing.company);
    cy.get('input[name="address_1"]').type(billing.address1);
    cy.get('input[name="address_2"]').type(billing.address2);
    cy.get('label[for="input-payment-city"]').type(billing.city);
    cy.get('input[name="postcode"]').type(billing.postcode);
    
    // Select country and zone
    cy.get('#input-payment-country').select(billing.country);
    cy.get('#input-payment-zone').select(billing.zone);
    
    // Add comment and agree to terms
    cy.get('#input-comment').type(billing.comment);
    cy.get('label[for="input-agree"]').click(); 
   
   // Save billing details
   cy.get('button[id="button-save"]').click();
  };
});
