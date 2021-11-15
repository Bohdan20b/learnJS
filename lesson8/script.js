//onscroll
const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.div1')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
//onsubmit
const form = document.getElementById('form');
const error = document.getElementById('error');
const city = document.getElementById('city');
const thanks = document.getElementById('thanks');
city.oninvalid = invalid;
form.onsubmit = submit;
function invalid(event) {
  error.removeAttribute('hidden');
}
function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');
  event.preventDefault();
}
  //oncontextmenu
  const section2 = document.querySelector('.div4')
  window.addEventListener('dblclick',() => {
      section2.style.border = '5px solid orange';
  })
  //onfocus
  
var x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "";
}

