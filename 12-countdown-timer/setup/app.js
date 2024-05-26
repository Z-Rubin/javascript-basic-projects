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

const giveaway = document.querySelector(".give-away");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 5, 18, 12);

giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()-1]}, 
  ${futureDate.getDate()} 
  ${months[futureDate.getMonth()]} 
  ${futureDate.getFullYear()}, 
  ${futureDate.toLocaleString()}`

function getRemainingTime(){
  const today = new Date().getTime();
  const dateDif = futureDate-today;
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(dateDif/oneDay);
  let hours = Math.floor(dateDif%oneDay/oneHour);
  let minutes = Math.floor(dateDif%oneHour/oneMinute);
  let seconds = Math.floor(dateDif%oneMinute/1000);

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
  if (dateDif < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }
}

function format(item){
  if (item < 10)
    return item = `0${item}`;
  else
  return item
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

