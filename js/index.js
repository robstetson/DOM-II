// Your code goes here
// Changing the links text color
// ***********************************1-4***********************************/
Array.from(document.links).forEach((link) => {
  link.addEventListener(
    "mouseenter",
    function (event) {
      event.target.style.color = "purple";
      //color reset
      setTimeout(function () {
        event.target.style.color = "";
      }, 500);
    },
  );
});
// ***********************************5***********************************/
const funBusColor = document.querySelector("h1.logo-heading");

funBusColor.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
});
// ***********************************6***********************************/
funBusColor.addEventListener("mouseleave", function (event) {
  event.target.style.color = "blue";
  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
});

// ***********************************7***********************************/
document.querySelectorAll("anything");
function enterKey(event) {
  if (event.key === "Enter") {
    event.target.style.color = "purple";
  }
}
document.addEventListener("keydown", enterKey);
// ***********************************8***********************************/

window.addEventListener("load", (event) => {
  console.log(`Page is loaded`);
});

// ***********************************9***********************************/
let titleIn = document.querySelector("footer");
titleIn.addEventListener("focusin", (event) => {
  console.log("it is focused in");
});
// ***********************************10***********************************/
let titleOut = document.querySelector("footer");
titleOut.addEventListener("focusout", (event) => {
  console.log("it is focusedout");
});
// ***********************************11***********************************/
 const h2Dbl = document.querySelectorAll(".img-content img");

 h2Dbl[0].addEventListener("dblclick", function (){
   h2Dbl[0].setAttribute("src", "/fun.1d28a3ac.jpg")
 })
 // ***********************************12***********************************/
  const contentImg = document.querySelector(' .content-destination img')

  function zoom(event){
      event.preventDefault();
      scale += event.deltaY * -0.01;
      scale = Math.min(Math.max(.500, scale ), 1.3);
      contentImg.style.transform = `scale(${scale})`;

  }
  let scale = 2;
  contentImg.onwheel = zoom;

// Saving for the night


