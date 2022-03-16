
const cheerio = require('cheerio')
const axios = require('axios')

var cmnty = '';

setInterval(function () {



axios.get('https://m.cricbuzz.com/cricket-commentary/36341/aus-vs-eng-4th-test-the-ashes-2021-22').then((response) => {
  // Load the web page source code into a cheerio instance

  

  const $ = cheerio.load(response.data);
  const urlElems = $('.list-content span:nth-child(5)').text();
  const status = $('.cbz-ui-status').text();

  const title = $('#top').find('div').find('div:nth-child(9)').find('h4').text();
  const batsman1name = $('#top table tr:nth-child(2)').first().first().find('td:nth-child(1)').text();
  const batsman2name = $('#top table tr:nth-child(3)').first().first().find('td:nth-child(1)').text();
  const bowlername = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(1)').text();


  const batsman1run = $('#top table tr:nth-child(2)').first().first().find('td:nth-child(2)').text();
  const batsman2run = $('#top table tr:nth-child(3)').first().first().find('td:nth-child(2)').text();
  const bowlerwikwt = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(5)').text();
  const bowlerover = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(2)').text();

  const lbb = $('#top').find('div').find('div:nth-child(11)').find('div.cb-list-item.miniscore-data.ui-branding-style.ui-branding-style-partner').find('div').children().children().find('span:nth-child(8)').text();
  const batTeam = $('#top h3.ui-li-heading span.miniscore-teams.ui-bat-team-scores').text();
  const bowlTeam = $('#top h3.ui-li-heading span.teamscores.ui-bowl-team-scores').text();
  const crr = $('#top .ui-match-scores-branding .crr').text();
  var commentry = $('#paginationList').find('div').find('div:nth-child(3)').text();
  const commentry2 = $('#paginationList').find('div').find('div:nth-child(5)').text();
if  (!commentry ){
 commentry =commentry2;
}
  console.log(commentry);
  console.log(commentry2);

 
/*
  console.log('Title:',title);
  console.log(' ');
  console.log('Status:',status);
  console.log(' ');
  console.log('Bat:',batTeam,'CRR:',crr);
  console.log(' ');
  console.log('Last Balls :',lbb);
  console.log(' ');
  console.log(batsman1name,'Run:',batsman1run);
  console.log(' ');
  console.log(batsman2name,'Run:',batsman2run);
  console.log(' ');
  console.log(bowlername,'Over',bowlerover,'Wicket',bowlerwikwt);
  console.log(' ');
  console.log(commentry);
*/

});




},4000);






//#paginationList > div > div:nth-child(5) > div > div > div > p
//#paginationList > div > div:nth-child(3) > div > div > div > p

//#top > div > div:nth-child(11) > div.cb-list-item.miniscore-data.ui-branding-style.ui-branding-style-partner > div > div > div > span:nth-child(8)
//#paginationList > div > div:nth-child(4) > div > div > div > p
//#top > div > div:nth-child(11) > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(5)
//#top > div > div:nth-child(10) > div > div > h3 > div
//#top > div > div:nth-child(11) > div.cb-list-item.miniscore-data.ui-branding-style.ui-branding-style-partner > div > div > div > span:nth-child(5)
//#top > div > div:nth-child(11) > div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)
//#top > div > div:nth-child(11) > div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > b > span
