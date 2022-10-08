# Pay Notificaion Bot

[![License](https://img.shields.io/github/license/rmuraix/pnbot)](./LICENSE)
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

## About

LINE Bot that notifies wages based on shifts recorded in google calendar. Runs on Google Apps Script.

![card_demo](https://user-images.githubusercontent.com/35632215/194687278-cce01e01-2b9d-4fc4-abc1-d693cc70a6ce.png)

## Usage

### Push to GAS

```bash
$ npm install -g @google/clasp
$ clasp login
$ clasp create --type webapp --rootDir ./src
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
