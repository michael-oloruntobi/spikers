// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('visitURL', (url) => { 
    const username = Cypress.env('USERNAME');
    const password = Cypress.env('PASSWORD');
    const baseUrl = Cypress.config('baseUrl'); // Access baseUrl from Cypress config
    const modifiedUrl = baseUrl.replace(/^https:\/\//, '');

    // Check if baseUrl is defined
    if (!baseUrl) {
        throw new Error('baseUrl is not defined in Cypress configuration.');
    }

    // Construct the URL with basic authentication
    const authUrl = `https://${username}:${password}@${modifiedUrl}${url}`;
    cy.visit(authUrl);

})