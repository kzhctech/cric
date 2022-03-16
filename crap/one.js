
const cheerio = require('cheerio')
const axios = require('axios')

var cmnty = '';

setInterval(function () {



axios.get('https://cricket.one/scoreboard/D85/103/1st-ODI/Y/W/afg-vs-ban-1st-odi-afghanistan-tour-of-bangladesh-2022/live').then((response) => {

  

  const $ = cheerio.load(response.data);

  const run =  $('body').find('.team-name-data-card').find('span:nth-child(2)').text();
  const cmnty = $('#topDiv').find('span.cm-b-comment-c2').text();

  console.log(run);
  console.log('');
  console.log(cmnty);
  console.log('');

});




},4000);


//#topDiv > div:nth-child(4) > div > div > div.d-flex.text-align-start > span.cm-b-comment-c2
//body > app-root > app-default > app-match-details > div.container > div.live-score-header-card.des-none > div.team-profile > div > div.col-5.col-sm-5.col-md-5 > div.d-flex > div.team-name-data-card > span:nth-child(2)