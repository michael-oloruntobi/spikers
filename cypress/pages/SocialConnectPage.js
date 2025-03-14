export class SocialConnectPage {

    
    navigateToYoutube() {
        cy.visitURL("/social-connect/", { failOnStatusCode: false });
        cy.get(':nth-child(4) > .ant-card-body').click()
    }

    clickYoutubeSubscribeButton() {
        cy.get('.google-and-youtube-login-container > div > app-button > .ant-btn').click()
    }
}