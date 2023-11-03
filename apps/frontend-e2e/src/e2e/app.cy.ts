import { getClickButton } from "../support/app.po";

describe("frontend", () => {
    beforeEach(() => cy.visit("/"));

    it("should display click button", () => {
        getClickButton().contains("Click!");
    });
});
