let balls = document.getElementsByClassName('ball');

let i = 0;
while(i < 10) {

  balls[i].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
  balls[i].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
  balls[i].addEventListener('click', onBallClicked);
  i++;

}

let startTime = new Date();
console.log(startTime.getTime());

function onBallClicked(event) {
  document.body.removeChild(event.target);

  console.log( document.getElementsByClassName('ball').length );

  if(document.getElementsByClassName('ball').length == 0) {

    let endTime = new Date();
    console.log(endTime.getTime());

  }
}







