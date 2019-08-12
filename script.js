let c = document.querySelector(".clock");
let d = document.querySelector(".date");

let tick = setInterval(() => {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let date = today.toDateString();

  hh = hh > 12 ? hh - 12 : hh == 00 ? 12 : hh;

  c.innerText = `${pad(hh)} : ${pad(mm)} : ${pad(ss)}`;
  d.innerText = date;
}, 1000);

function pad(n) {
  return n.toString().padStart(2, "0");
}
