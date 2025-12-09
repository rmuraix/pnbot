# Pay Notificaion Bot

[![License](https://img.shields.io/github/license/rmuraix/pnbot)](./LICENSE)
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

## About

LINE Bot that notifies wages based on shifts recorded in google calendar. Runs on Google Apps Script.

![card_demo](https://user-images.githubusercontent.com/35632215/194687278-cce01e01-2b9d-4fc4-abc1-d693cc70a6ce.png)

## Development

This project uses modern tooling for enhanced reproducibility and code quality:

- **Biome**: Fast linter and formatter for TypeScript/JavaScript
- **esbuild**: Fast TypeScript bundler
- **clasp**: Google Apps Script deployment tool

### Setup

```bash
# Install dependencies
$ npm install

# Format code
$ npm run format

# Lint code
$ npm run lint

# Build TypeScript to JavaScript
$ npm run build
```

## Usage

### Build and Deploy to GAS

```bash
# Build the project
$ npm run build

# Deploy to Google Apps Script
$ npm install -g @google/clasp
$ clasp login
$ clasp create --type webapp --rootDir ./dist
$ clasp push
```

More command Information: [google/clasp](https://github.com/google/clasp)

### Set Script Properties

The following properties must be set.

- `CAL_ID`: Your calender ID(xxxxxxxxxx @group.calender.google.com)
- `CHANNEL_ACCESS_TOKEN`: [Channel access tokens](https://developers.line.biz/en/docs/messaging-api/channel-access-tokens/) for LINE Messaging API
- `EVENT_NAME1`, `EVENT_NAME2`: Name on the calendar for your shift
- `USER_ID`: Destination to which LINE bots send messages
- `WAGE1`, `WAGE2`: Hourly wage, corresponding to EVENT_NAME

## Contributing

Your contribution is always welcome. Please read [Contributing Guide](.github/CONTRIBUTING.md).
