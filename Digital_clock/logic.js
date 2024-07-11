const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `<span style="color: red;">${date.toLocaleTimeString()}</span>`
}, 1000);