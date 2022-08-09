import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
  <h1> Hello, this is our clock</h1>
  </div>
`
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date ();
  const seconds = now.getSeconds();
  //how do we turn this into degrees?
  const secondsDegrees = ((seconds / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360 + 90);
  minHand.style.transform = `rotate(${minutesDegrees}deg`

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360 + 180);
  hourHand.style.transform = `rotate(${hoursDegrees}deg`
  console.log(hours)
}
setInterval(setDate, 1000);


