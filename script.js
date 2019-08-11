let h = select("#h");
let m = select("#m");
let s = select("#s");
let d = select(".date");

let tick = setInterval(() => {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let date = today.toDateString();

  hh = hh > 12 ? hh - 12 : hh == 00 ? 12 : hh;

  h.innerText = hh.toString().padStart(2, "0");
  m.innerText = mm.toString().padStart(2, "0");
  s.innerText = ss.toString().padStart(2, "0");
  d.innerText = date;
}, 1000);

function select(el) {
  return document.querySelector(el);
}
