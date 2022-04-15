describe("heading", () => {
    it("displays heading without error", () => {
        cy.visit("http://localhost:3000");

        cy.get("h1")
        .should("contain", "Welcome to the Trivia Challenge!")
    })
})

describe("Quiz Begin Button", () => {
    it("renders anchor without error", () => {
        cy.visit("http://localhost:3000");

        cy.get("a")
        .should("contain", "BEGIN")
    })
    it("routes to /quiz", () => {
        cy.visit("http://localhost:3000");

        cy.get("a")
        .click()

        cy.url()
        .should("include", "/quiz")
    })
})