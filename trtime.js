var createCounter = function(){
	currentNum = localStorage.getItem('clickcount');
	$("<span id='mainNum' contenteditable='true' tabindex='-1' style='padding: 6px 8px;border-radius:5px;border:1px solid lightgray; margin: 0px 10px;'>0</span").insertBefore("#app-root > div > div.application-wrapper--content > div > div > div.action-bar > div > div.col.text-right")
$('#mainNum').text(currentNum);
}
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
     } 
}
$( ".btn-success" ).click(function() {
  clickCounter();
});

$('#app-root > div > div.application-wrapper--content > div:nth-child(2) > div > div.action-bar > div > div.col.text-right').prepend('<label id="minutes">00</label>:<label id="seconds">00</label>')

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
