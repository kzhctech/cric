const socket = io('https://cric24.herokuapp.com');
const startingLocation = window.location.pathname.substring(1);
//alert(startingLocation);

var cmnty;
var cmnt;
var dtail;

function midwiket(run){
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f1");
  
  if(run < 4 || !run){
    ball.style.animation = "midwiket-ball 4s";
  }
  else{
    ball.style.animation = "midwiket-ball-boundary 4s";
  }
  
  filder.style.animation = "midwiket-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
  
}

function updateit(sts){
   document.getElementById("statusbar").innerHTML = sts;  
}

function updateTitle(tit){
   document.getElementById("vs").innerHTML = tit;  
}

function updateScore(sco){
   document.getElementById("batScore").innerHTML = sco;  
}


function updateBat1(name,run){
   document.getElementById("bat1").innerHTML = name + run;  
}

function updateBat2(name,run){
   document.getElementById("bat2").innerHTML = name + run;  
}


function updateBowler(name,over,wiket){
   document.getElementById("bowler").innerHTML = name + ":" + over + "-" + wiket;  
}

function updatelbb(lbb){
   document.getElementById("lbb").innerHTML = lbb;  
}

socket.on('message',(status)=> {
  console.log('new');
  if (status.commentry != dtail){
      console.log(status.commentry);
 }
if (cmnty != status.batTeam && cmnt != status.batTeam){
  cmnt = cmnty;
  cmnty = status.batTeam;
  midwiket();
  updateit(status.status);
  updatelbb(status.lbb);
  updateTitle(status.title);
  updateScore(status.batTeam);
  updateBat1(status.batsman1name,status.batsman1run);
  updateBat2(status.batsman2name,status.batsman2run);
  updateBowler(status.bowlername,status.bowlerover,status.bowlerwikwt )
  console.log(status);
}
});

function hit(){
  socket.emit('message',startingLocation);
}
