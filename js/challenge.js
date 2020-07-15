document.addEventListener("DOMContentLoaded",function domLoaded()
{
  var is_paused = false;
  const counter = document.getElementById("counter");
  window.setInterval(incrementCounter,1000)  

  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  plus.addEventListener("click",function(e)
  {
    incrementCounter();
  });
  minus.addEventListener("click",function(e)
  {
    decrementCounter();
  }); 
  /*pauseListener*/
  //stop counter
  //set minus, plus, heart, submit(comment) to disabled
  //change text on pause button to resume
  //make resume do the opposite
  const pause = document.getElementById("pause");
  pause.addEventListener("click",function(e)
  {

  });
});

function incrementCounter()
{
  counter.innerText = (parseInt(counter.innerText,10) + 1)
}
function decrementCounter()
{
  counter.innerText = (parseInt(counter.innerText,10) - 1)
}
