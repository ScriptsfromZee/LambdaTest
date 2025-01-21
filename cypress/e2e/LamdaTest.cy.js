describe("LamdaTest Suite", () => {
  it("User Sign Up", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );

    //User enters Personal Details
    cy.get('input[name="firstname"]').type("David");
    cy.get('input[name="lastname"]').type("Jones");
    cy.get('input[type="email"]').type("Derek@mailinator.com");
    cy.get('input[type="tel"]').type("+2348020895412");
    cy.get('input[id="input-password"]').type("20December!");
    cy.get('input[name="confirm"]').type("20December!");
    cy.get('label[for="input-newsletter-yes"]').click();
    cy.get('label[for="input-agree"]').click();
    cy.get('input[type="submit"]').click();
    cy.get('a[class="btn btn-primary"]').click();
    cy.get(
      'img[src="https://ecommerce-playground.lambdatest.io/image/catalog/maza/svg/image2vector.svg"]'
    ).click();
    
  });
});
