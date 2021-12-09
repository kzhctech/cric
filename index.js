const socket = io('https://cric24.herokuapp.com');
const startingLocation = window.location.pathname.substring(1);
alert(startingLocation);

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





socket.on('message',(status)=> {midwiket()});

function hit(){
  console.log(status);
  socket.emit('message',startingLocation);
}
