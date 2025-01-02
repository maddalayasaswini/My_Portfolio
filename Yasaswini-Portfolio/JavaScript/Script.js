//Navbar menu
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        // Toggle between fa-bars and fa-times
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });
});


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend developer","Machine Learning"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


//ABOUT
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//PROJECTS
// filter using javascript
$(document).ready(function () {
    $(".filter-item").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".post").show("1000");
      } else {
        $(".post")
          .not("." + value)
          .hide("1000");
        $(".post")
          .filter("." + value)
          .show("1000");
      }
    });
});


//CONTACT
const scriptURL = 'https://script.google.com/macros/s/AKfycbxehl_7BK5h_z2U4JxFGH_4isRhFb6KLnyHGcijy2zztU5zwlnc6IFIxPMfWROL5Qss/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


// adding funtionality to back to top button 
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});