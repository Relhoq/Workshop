function initCountdown(e) {
  var min, sec, hund, secExt, hundExt, minExt, startTimer;
  var divCountdown = document.getElementById("divCountdown");
  var e;

  if (Math.floor(e / 60) == 0) {
    min = 0;
  } else {
    min = Math.floor(e / 60);
  }

  if (e % 60 == 0) {
    sec = 0;
  } else {
    sec = e - 60 * min;
  }

  hund = 0;
  startTimer = setInterval(startCountdown, 10);
  function startCountdown() {
    hund = hund - 1;
    if (hund == 0 && sec == 0 && min == 0) {
      clearInterval(startTimer);
    } else if (hund < 0 && sec > 0) {
      sec = sec - 1;
      hund = 99;
    } else if (hund < 0 && sec == 0 && min > 0) {
      min = min - 1;
      sec = 59;
      hund = 99;
    }
    if (hund == 0 && sec == 0 && min == 0) {
      divCountdown.innerHTML = "out of time";
    } else {
      if (sec < 10) {
        secExt = "0" + sec;
      } else {
        secExt = sec;
      }
      if (hund < 10) {
        hundExt = "0" + hund;
      } else {
        hundExt = hund;
      }
      if (min > 10) {
        minExt = "0" + min;
      } else {
        minExt = min;
      }

      divCountdown.innerHTML = min + ":" + secExt + ":" + hundExt;
    }
  }
}
