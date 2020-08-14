const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/* ---- display of "registration expirary date" --- */
const webinarDate = document.querySelector(".webinar-date");
const webinarDateTop = document.querySelector(".webinar-date-top");
const deadline = document.querySelector(".head-deadline");
const items = document.querySelectorAll(".deadline-format-center h4");
const items_two = document.querySelectorAll(".deadline-format-center-two h4");
// console.log(items);

// Set 15 days from now
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date();
// futureDate = new Date (2020, 10, 24, 11, 0, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 15, 11, 30, 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month + 1];
let day = weekdays[futureDate.getDay()];

const date = futureDate.getDate();

webinarDate.textContent = `come and join us on: ${day}, ${date} ${month} ${year}, 11:00AM.`;
webinarDateTop.textContent = `${day}, ${date} ${month} ${year}`;
/* ---- Calculate remaining time and show countdown timer --- */

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

// subtracting current time off future time
function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // how many ms in one day?
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];

  // function format(item) {
  //   if (item < 10) {
  //     return (item = `0${item}`);
  //   }
  //   return item;
  // }

  items.forEach(function (item, index) {
    // item.innerHTML = format(values[index]);
    item.innerHTML = values[index];
  });

  items_two.forEach(function (item, index) {
    // item.innerHTML = format(values[index]);
    item.innerHTML = values[index];
  });

  // if (t < 0) {
  //   clearInterval(countdown);
  //   deadline.innerHTML = `<h4 class="expired> Sorry, this webinar has expired</h4>`;
  // }
}

// countdown using setInterval
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
