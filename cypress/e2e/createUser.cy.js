describe("create user", () => {
   const userMock = {
      name: "John Doe",
      email: "johndoe@email.com",
   };

   it("should be able to create user sucessfully", () => {
      cy.visit("/");
      cy.get("#name").type(userMock.name), cy.get("#email").type(userMock.email);
      cy.get("form button").click();
      cy.get("ul li")
         .should("contain.text", userMock.name)
         .should("contain.text", userMock.email);
   });
});
