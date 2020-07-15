
let is_paused = false;

document.addEventListener("DOMContentLoaded",function domLoaded()
{
  const counter = document.getElementById("counter");
  window.setInterval(incrementCounter,1000)  

  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const pause = document.getElementById("pause");
  const heart = document.getElementById("heart");
  const submit = document.getElementById("submit");
  plus.addEventListener("click",function(e)
  {
    incrementCounter();
  });
  minus.addEventListener("click",function(e)
  {
    decrementCounter();
  }); 

  /*pauseListener*/
  pause.addEventListener("click",function(e)
  {
    const buttons = [minus,plus,heart,submit];
    //toggle is_paused
    is_paused = !is_paused;
    //toggle each buttons 'disabled' property     
    for(const html_tag of buttons)
    {
      html_tag.disabled = !html_tag.disabled;
    }   
    if (is_paused)
    {       
      //change text on pause button to resume
      pause.innerText = 'resume'
    } else
    {    
      //change text on pause button to resume
      pause.innerText = 'pause'
    }
  });
});
//increment counters value by one, unless is_paused
function incrementCounter()
{
  if (!is_paused)
  {    
    counter.innerText = (parseInt(counter.innerText,10) + 1)
  }
}
//decrement counter's value by one
function decrementCounter()
{
  counter.innerText = (parseInt(counter.innerText,10) - 1)
}
