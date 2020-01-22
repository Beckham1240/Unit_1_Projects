"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Beckham Le
   Date:   1/21/20

   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
var minsLeft = 30;
var secsLeft = 15;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countDown()", 1000);

//calculates the minutes and seconds and inserts them in the minutes and seconds ID and deduces the time by 1 
function countDown(){
   minsLeft = Math.floor(timeLeft / 60);
   secsLeft = timeLeft - 60 * minsLeft;
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   timeLeft--;
}
//stops the clock and presents the Order Expired message when timer runs out
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML('beforeEnd', "<br />(Order Expired)");
   clockID = clearInterval(clockID);
}
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
