# HAL's Bot Generator

We are lazy, and we are damn proud of it 😴. So, we decided to create a script to auto-generate HAL bots to keep track of cool DeFi projects 😎.

## Use case
Our goal was to use HAL to create a Bot notifying any deposit or withdraw with a USD value higher than X, on any yVault, and send a message both on Telegram and Twitter.

That means 16 vaults * 2 use cases (deposit and withdraw) * 2 actions (Telegram and Twitter) -> 64 triggers (manually checking che current price of each token to convert the threshold from fiat to the vault token).

This script solves this and it's generalized for any similar bot creation.

## How to install

Well, it's pretty simple. Just clone the repo, then run:

```
yarn
```

Finally, use the `.env.example` file to create a `.env` file with correct variables.

And that's it! 🥳

### Test mode
You don't want to create triggers on the production database to test this script, do you? So, use `ENV=test` parameter in the `.env` file to just print a log. 🥸

## How to run the HAL bot generator

Follow the script! 🧞‍♀️

| Dapp | Bot | Description | Script |
| ------ | ------- | ------- | ------ |
| Yearn | Track yVault Deposit | Track deposits on vaults | `yarn run yearnTrackDeposit` |
| Yearn | Track yVault Withdraw | Track withdrawals on vaults | `yarn run yearnTrackWithdraw` |

You will find some useful logs in the `logs` directory.
