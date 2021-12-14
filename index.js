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




socket.on('message',(status)=> {
  midwiket();
  updateit(status.status);
  updateTitle(status.title);
  console.log(status);
});

function hit(){
  socket.emit('message',startingLocation);
}
