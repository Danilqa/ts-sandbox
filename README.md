# Users Hub

## Features

1. See user list
2. Create a new user
3. See user details
4. Edit user details

## Getting Started

### Prerequisites

- Node.js (>18)
- pnpm

## Usage

### Development

Install dependencies:

```bash
pnpm install
```

Run a web app:

```bash
pnpm dev
```

**The web app** will be available at http://localhost:3228.

The mock server will run on port 4000.

### Tests

Tests are located in the `/e2e` folder.\
To run Playwright end-to-end tests, run:

```bash
pnpm test
```

Note: 

1. Please make sure you run the app and the mock app server beforehand.
2. Make sure the latest browsers are installed:
    ```bash
    pnpm exec playwright install
    ```


