if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', 0)
}

document.addEventListener("DOMContentLoaded", function(){

  var counter = localStorage.getItem('counter')
  setInterval(count, 1000)
  document.querySelector('h1').innerHTML = counter

  function count(){
    counter++
    localStorage.setItem('counter', counter)
    document.querySelector("h1").innerHTML = counter
  }
})
