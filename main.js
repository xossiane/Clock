import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
  <h1> Hello </h1>
  </div>
`
const secondHand = document.querySelector('.second-hand');

function setDate(){
  const now = new Date ();
  const seconds = now.getSeconds();
  //how do we turn this into degrees?
  const secondsDegrees = ((seconds / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  console.log(seconds)
}
setInterval(setDate, 1000);


