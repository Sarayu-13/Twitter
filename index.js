require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express')
const app = express()
const port = process.env.PORT || 10000;
const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Check this out..!!");
  } catch (e) {
    console.log(e)
  }
}

const cronTweet = new CronJob("30 * * * * *", async () => {
  tweet();
});

cronTweet.start();
