describe("remove user", () => {
    it("should be able to remove user sucessfully", () => {
        cy.visit("/")
        cy.fixture("user").then((user) => {
            cy.createuser(user.name, user.email)
        })
        cy.get("li button").click();
        cy.get("li").should("not.exist");
    })
})