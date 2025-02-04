require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;

const data={
    name:"sarayu",
    id:1
}
const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Check this out!", { attachment_url: 'https://minimumjewellery.com/shopall/bundles' });

  } catch (e) {
    console.log(e)
  }
}

const cronTweet = new CronJob("0 */5 * * * *", async () => {
  tweet();
});

cronTweet.start();