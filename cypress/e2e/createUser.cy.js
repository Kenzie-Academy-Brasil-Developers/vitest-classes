describe("create user", () => {
   it("should be able to create user sucessfully", () => {
      cy.visit("/");
      cy.fixture("user").then((user) => {
         cy.createuser(user.name, user.email);
         cy.get("ul li").should("contain.text", user.name).should("contain.text", user.email);
      });
   });
});
