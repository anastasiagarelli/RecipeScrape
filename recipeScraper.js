const rp = require('request-promise')
let url = 'https://www.foodnetwork.com/recipes/ellie-krieger/zucchini-parmesan-crisps-recipe-1939866'
const $ = require('cheerio')

async function scrape() {
  let html = await rp(url)
  console.log($('.o-Ingredients__m-Body', html).text())
}
scrape()
