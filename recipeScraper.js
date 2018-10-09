const rp = require('request-promise')
let url = 'https://www.foodnetwork.com/recipes/ellie-krieger/zucchini-parmesan-crisps-recipe-1939866'
const $ = require('cheerio')

async function scrape() {
  let html = await rp(url)
  let ingredients = $('.o-Ingredients__m-Body', html).text()
  let recipe = $('ol', html).text()
}

scrape()
