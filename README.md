# TrendingGitRepos

This project is a small web application built with Angular and Material UI. It fetches and lists the most starred GitHub repositories that were created in the last 30 days. The data is fetched directly from the GitHub API.

## Features

- Lists the most starred GitHub repositories created in the last 30 days.
- Clicking on a repository opens it in a modal.
- Users can rate the repository using a 5-star rating system.
- The rating given by the user is reflected on the repository item when the modal window is closed.

## Technologies Used

- Angular
- Material UI
- Cypress for end-to-end testing
- Jasmine and Karma for unit testing

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the local server with `ng serve`.
4. Open your browser and navigate to `http://localhost:4200`.

## Running Tests

- Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

For Cypress, you can use the following commands:

- `npm run cypress:open` - Opens the Cypress Test Runner.
- `npm run cypress:run` - Runs Cypress tests in the command line.

## Test Results

For the latest test results, please refer to the "`Test results`" folder provided in the repository. These include results from both unit tests and end-to-end tests.

## API Reference

The GitHub API is used to fetch the most starred repositories created in the last 30 days. The API endpoint is: `https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc`, where `{date}` is the date 30 days ago.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

