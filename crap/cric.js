
const cheerio = require('cheerio')
const axios = require('axios')

var cmnty = '';






setInterval(function () {


axios.get('https://www.espncricinfo.com/series/australia-in-pakistan-2021-22-1288300/pakistan-vs-australia-2nd-test-1288311/live-cricket-score').then((response) => {

  

  const $ = cheerio.load(response.data);


  const run =  $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div:nth-child(1)').find('div').find('div').find('div.match-header-container').find('div.match-header').find('div').find('div').find('div').find('div.teams').find('div').find('div.team:nth-child(2)').find('span.score').text();


  const batname =  $('#main-container').find('.match-info-MATCH-full-width').find('div.collapsed').find('div.name-detail').find('a').find('p').text();
  const batrun =  $('#main-container').find('.match-info-MATCH-full-width').find('span.score').text();



  cmnty = $('#main-container').find('div.match-comment').first().find('div.match-comment-long-text').first().text();
  const st = $('#main-container').find('div.match-comment').first().find('div.match-comment-run').text();
  const brun = $('#main-container').find('div.match-comment').first().find('span.match-comment-over').text();

  const bat1name = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(1)').find('td:nth-child(1)').find('a').text().slice(0, -5);
  const bat1run = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(1)').find('td:nth-child(2)').text();
  const bat1ball = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(1)').find('td:nth-child(3)').text();

  const bat2name = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(2)').find('td:nth-child(1)').find('a').text().slice(0, -5);
  const bat2run = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(2)').find('td:nth-child(2)').text();
  const bat2ball = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(2)').find('tr:nth-child(2)').find('td:nth-child(3)').text();

  const bowlername = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(4)').find('tr:nth-child(1)').find('td:nth-child(1)').find('a').text().slice(0, -5);
  const bowlerover = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(4)').find('tr:nth-child(1)').find('td:nth-child(2)').text();
  const bowlerwk = $('#main-container').find('div:nth-child(1)').find('div').find('div.container').find('div.row').find('div.col-16.col-md-16.col-lg-12.main-content-x').find('div.match-body').find('div.w-75').find('table').find('tbody:nth-child(4)').find('tr:nth-child(1)').find('td:nth-child(5)').text();


  console.log(batname,':',batrun);

  console.log('Batsman 1: ',bat1name,'Run:',bat1run,'(',bat1run,')');
  console.log('Batsman 2: ',bat2name,'Run:',bat2run,'(',bat2run,')');
  console.log('Bowler: ',bowlername,bowlerover,'-',bowlerwk);

  console.log('Commenty: ',cmnty);
  console.log('Over: ',brun);
  console.log('Status',st);
  console.log('');


});



},10000);





//#https\3a \2f \2f www\2e espncricinfo\2e com\2f series\2f australia-in-pakistan-2021-22-1288300\2f pakistan-vs-australia-2nd-test-1288311\2f live-cricket-score > div:nth-child(10) > div > div > div.match-comment > div.d-flex.match-comment-padder.align-items-center > div.col-2.col-md-1.col-lg-3.match-comment-run-col > div > div > span

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div > div > div > div > div > div > div > div.name-detail > a > p

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div > div > div > div > div > div > div > div.score-detail > span.score-info

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div > div > div > div > div > div > div > div.score-detail > span.score

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div > div > div > div > div > div > div > div.score-detail


//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div:nth-child(2) > div > div:nth-child(2) > div > div > div.w-75 > div > table > tbody:nth-child(4) > tr:nth-child(2) > td:nth-child(1) > a

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div:nth-child(2) > div > div:nth-child(2) > div > div > div.w-75 > div > table > tbody:nth-child(4) > tr:nth-child(1) > td:nth-child(1) > a


//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div:nth-child(2) > div > div:nth-child(2) > div > div > div.w-75 > div > table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > a


//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div.match-header > div > div > div > div.teams > div > div:nth-child(2) > div.score-detail.fadeIn-enter-done > span.score

//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div:nth-child(1) > div > div > div.match-header-container > div.match-header > div > div > div > div.teams > div


//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.comment-container.card > div.mb-5.comments-container-body > div > div:nth-child(1) > div.match-comment > div > .match-comment-run


//#main-container > div:nth-child(1) > div > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.comment-container.card > div.mb-5.comments-container-body > div > div:nth-child(1) > div.match-comment > div > span.match-comment-over
