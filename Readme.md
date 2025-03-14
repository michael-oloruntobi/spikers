# Cypress Project: Social Connect Tests

This project is designed to automate the testing of social connect features, specifically focusing on navigating to YouTube and verifying the appearance of an image after logging in via Google. Below, you'll find instructions for setting up and running the project, an overview of the architectural choices, and details on how to execute the tests.

## Setup and Run Instructions

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **Cypress**: This project uses Cypress for end-to-end testing.

### Installation
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory of your project and add the following variables:
   ```plaintext
   BASE_URL=<your-base-url>
   GOOGLE_USERNAME=<your-google-username>
   GOOGLE_PASSWORD=<your-google-password>
   USERNAME=<your-username>
   PASSWORD=<your-password>
   ```
   Replace `<your-base-url>`, `<your-google-username>`, `<your-google-password>`, `<your-username>`, and `<your-password>` with your actual credentials and base URL.

### Running the Tests
To run the tests, use the following command:
```bash
npx cypress open
```
This command opens the Cypress Test Runner, where you can execute the `socialConnect.cy.js` spec file.

Alternatively, to run the tests headlessly:
```bash
npx cypress run
```

## Overview of Architectural Choices

### Page Object Model (POM)
The project utilizes the Page Object Model design pattern to enhance test maintenance and reduce code duplication. Each page in the application has a corresponding class (e.g., `SocialConnectPage`) that encapsulates the page's selectors and interactions.

### Custom Commands
Custom Cypress commands are used to abstract common actions and assertions. For example, the `visitURL` command handles navigation with basic authentication, simplifying test scripts and improving readability.

### Environment Configuration
Environment variables are managed through a `.env` file and accessed via `Cypress.env()`. This approach keeps sensitive information secure and makes the project adaptable to different environments without code changes.

### Handling External Logins
The test for social connect features involves logging into Google. This is handled using Cypress's `cy.origin` command, which allows tests to interact with multiple domains securely.

## Instructions for Running Tests

### Test File: `socialConnect.cy.js`
This spec file contains tests for the social connect functionality, specifically navigating to YouTube and verifying an image appears after logging in via Google.

#### Key Actions:
1. **Navigate to YouTube**: The test navigates to the YouTube section of the application.
2. **Click Subscribe Button**: It clicks the subscribe button, which triggers a new window or tab.
3. **Handle Navigation**: The test captures the URL of the new window and logs into Google using the credentials provided in the environment variables.
4. **Verify Login**: After logging in, the test verifies that the navigation was successful.

### Pages
- **SocialConnectPage**: Contains methods for navigating to YouTube and interacting with the subscribe button.

### Commands
- **visitURL**: A custom command that navigates to a specified URL with basic authentication.

### Configuration
- **cypress.config.js**: Configures the base URL and environment variables for the project.

### Environment Variables
Ensure all required environment variables are set in the `.env` file before running the tests.

## Conclusion
This project demonstrates a structured approach to automating social connect tests using Cypress. By following the setup instructions and understanding the architectural choices, you can efficiently run and maintain the tests.