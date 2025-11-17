# mern-test — Testing & Debugging MERN Applications

A focused assignment repository for implementing comprehensive testing strategies for a MERN stack application (MongoDB, Express, React, Node), including unit, integration, and end-to-end tests, plus debugging techniques and coverage reporting.

## Quick summary
- Server coverage HTML: `server/coverage/lcov-report/index.html`
- Goal: unit, integration, and E2E tests with ≥70% coverage for unit tests
- Tools used: Jest, React Testing Library, Supertest, Cypress or Playwright, mongodb-memory-server

## Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB (local or Atlas) — optional for some tests if using memory server
- Git (for repo workflow)
- Windows commands shown where relevant

## Install (server/client)
1. Clone or open repository at `d:\mern-test`.
2. Install server deps:
   cd d:\mern-test\server
   npm install
3. If a client exists:
   cd d:\mern-test\client
   npm install

## Environment
Create a `.env` in `server/`:
NODE_ENV=development
PORT=3000
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>

Adjust names to match your codebase.

## Useful scripts (example)
Run from `server/` (adjust if your package.json differs):
- npm run dev        — start server with nodemon (development)
- npm start          — start production server
- npm test           — run Jest tests
- npm run coverage   — run tests and generate coverage report (html in server/coverage)
- npm run lint       — run linters (if configured)

If client has scripts:
- cd client && npm start

## Run tests & open coverage (Windows)
1. From `server/`:
   npm test
2. Generate coverage (if configured):
   npm run coverage
3. Open report (Windows):
   start "" "server\coverage\lcov-report\index.html"

Or open the file directly in your browser.

## Testing guidance
- Unit tests: isolate functions and components, mock external services
- Integration tests: use Supertest against an Express app instance; spin up an in-memory MongoDB (mongodb-memory-server) for DB tests
- E2E tests: use Cypress or Playwright to test critical user flows (login, CRUD)
- Coverage: focus on edge cases and error handling paths to increase meaningful coverage

## Debugging tips
- Use console logs selectively and prefer structured logging (debug levels)
- Reproduce failing tests locally and run Jest with `--runInBand` and `--detectOpenHandles`
- For DB-related tests use mongodb-memory-server to avoid flakiness
- Use VS Code breakpoints for server code; run `node --inspect-brk` or use the built-in debugger
- For client UI issues, use React DevTools and Cypress interactive runner

## Project structure (reference)
- /client — React front-end (if present)
  - src/components, src/tests
  - cypress/ (E2E tests)
- /server — Express API, tests, coverage
  - src/controllers, src/models, src/routes, src/middleware
  - tests/unit, tests/integration
  - coverage/ (HTML reports)
- jest.config.js, package.json at root or in each package as applicable

## Submission checklist
- Unit, integration, and E2E tests implemented
- Unit test coverage ≥70%
- Coverage HTML report included or generated at `server/coverage/lcov-report/index.html`
- README documents testing strategy and how to run tests
- Screenshots of coverage reports added to repository if required by assignment

## Contributing
- Fork → branch → commit → PR
- Run tests and linters before pushing
- Describe tests added or changed in PR description

## Resources
- Jest: https://jestjs.io
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Supertest: https://github.com/visionmedia/supertest
- Cypress: https://docs.cypress.io/
- mongodb-memory-server: https://github.com/nodkz/mongodb-memory-server

## License
Specify project license (e.g., MIT). Add a LICENSE file if needed.