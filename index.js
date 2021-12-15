const socket = io('https://cric24.herokuapp.com');
const startingLocation = window.location.pathname.substring(1);
//alert(startingLocation);

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
   document.getElementById("bat2").innerHTML = name + over + wiket;  
}


socket.on('message',(status)=> {
  midwiket();
  updateit(status.status);
  updateTitle(status.title);
  updateScore(status.batTeam);
  updateBat1(status.batsman1name,status.batsman1run);
  updateBat2(status.batsman2name,status.batsman2run);
  updateBowler(status.bowlername,status.bowlerover,status.bowlerwikwt )
  console.log(status);
});

function hit(){
  socket.emit('message',startingLocation);
}
