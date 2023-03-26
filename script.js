let timerId = setInterval(function(e) {
  let time = new Date();
  hour.textContent = time.getHours();
  minute.textContent = time.getMinutes();
  second.textContent = time.getSeconds();
  ampm.textContent = hour.textContent < 12 ? 'AM' : 'PM';

}, 1000);