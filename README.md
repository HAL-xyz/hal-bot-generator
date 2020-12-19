# Hal's Bot Generator

Hal Collective inc. is proudly made up of a very lazy team 😴. So, we thought about to create a script to auto-generate bots to keep track of some cool DeFi projects 😎.

## How to install

Well, it's pretty simple. Just clone the repo then run:

```
yarn
```

Finally, use the `.env.example` file to create a `.env` file with correct variables.

And that's it! 🥳

### Test mode
You don't want to create a trigger on your database to test this script, do you? So, use `ENV=test` parameter in the `.env` file and just print a log. 🥸

## How to run the bot generator

Follow the script! 🧞‍♀️

| Dapp | Bot | Description | Script |
| ------ | ------- | ------- | ------ |
| Yearn | Track yVault Deposit | Track deposits on vaults | `yarn run yearnTrackDeposit` |
| Yearn | Track yVault Withdraw | Track withdrawals on vaults | `yarn run yearnTrackWithdraw` |

Then, you can find some useful logs in `logs` directory.
