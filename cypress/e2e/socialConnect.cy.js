import { SocialConnectPage } from "../pages/SocialConnectPage";

describe("Social Connect Tests", () => {
  const socialConnectPage = new SocialConnectPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visitURL("/");
  });

  it("should navigate to YouTube and verify image appears", () => {
    socialConnectPage.navigateToYoutube();
    let newUrl = "";
    cy.window().then((win) => {
      cy.stub(win, "open")
        .as("windowOpen")
        .callsFake((url) => {
          newUrl = url;
        });
    });

    socialConnectPage.clickYoutubeSubscribeButton();
    cy.get("@windowOpen").should("be.called");

    // Handle the navigation
    cy.get("@windowOpen").then((stub) => {
      if (stub.called) {
        // If JavaScript navigation is used (e.g., window.open)
        const targetUrl = stub.getCall(0).args[0]; // Capture the URL passed to window.open
        cy.log("Captured URL (JavaScript navigation):", targetUrl);
        // Store the URL in a Cypress environment variable for later use
        Cypress.env("capturedUrl", targetUrl);
      } else {
        // If standard href navigation is used
        cy.location("href").then((url) => {
          cy.log("Captured URL (href navigation):", url);
          // Store the URL in a Cypress environment variable for later use
          Cypress.env("capturedUrl", url);
        });
      }
    });

    //Login to gmail
    cy.origin("https://accounts.google.com", () => {
      // Step 5: Use the captured URL
      cy.then(() => {
        const capturedUrl = Cypress.env("capturedUrl");
        cy.log("Stored URL:", capturedUrl);
        cy.log("GOOGLE_USERNAME:", Cypress.env("GOOGLE_USERNAME"));
        cy.log("GOOGLE_PASSWORD:", Cypress.env("GOOGLE_PASSWORD"));

        cy.visit(capturedUrl);
        cy.get('input[type="email"]').type(Cypress.env("GOOGLE_USERNAME")); // Enter email
        cy.get("#identifierNext").click();
        cy.get('input[type="password"]', { timeout: 10000 }).type(
          Cypress.env("GOOGLE_PASSWORD")
        ); // Enter password
        cy.get("#passwordNext").click();
      });
    });
  });
});
