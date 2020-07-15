
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
  const list = document.querySelector('ul.likes');
  const form = document.getElementById('comment-form');
  const commentDiv = document.getElementById('list')

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

    const numberMap = {};

   heart.addEventListener("click", function(e){
      
       const countVal = parseInt(counter.innerText,10);
       if (numberMap[countVal]) {
           numberMap[countVal] += 1
       }
       else {
           numberMap[countVal] = 1 
       }
       let li = document.querySelectorAll(`[data-num='${countVal}']`)[0];
       if(!li)
       {
          li = document.createElement("li")
          list.appendChild(li)
       }

       li.dataset.num = countVal
       li.innerHTML = `${countVal} has been liked <span>${numberMap[countVal]}</span> times`

    //    Set data-num property 
    //    Set inner-text
   })

   form.addEventListener('submit', function(e){
       e.preventDefault();
       let input = document.getElementById('comment-input');
       let paragraph = document.createElement('p');
       paragraph.innerText = input.value;
       commentDiv.appendChild(paragraph);
   })


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


//listener on like - counter val-> key : value->times
//find(and increment) or create