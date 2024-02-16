// Function to toggle the dropdown
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Function to handle logout
  function logout() {
    // Add your logout functionality here, for example redirecting to logout page or clearing session
    alert("Logged out");
  }
  

  // redirecting in Desktop
  const index = document.getElementById("index")
  const feedback = document.getElementById("feedback")



index.addEventListener("click",(e)=>{


window.location.href="index.html"


})

feedback.addEventListener("click",(e)=>{


window.location.href="feedback.html"


})

  // redirecting in Mobiles
  const mobindex = document.getElementById("mobindex")
  const mobfeedback = document.getElementById("mobfeedback")



mobindex.addEventListener("click",(e)=>{


window.location.href="index.html"


})

mobfeedback.addEventListener("click",(e)=>{


window.location.href="feedback.html"


})

// Hamburger Menu 
let btn= document.getElementById('menu-btn');
let menu = document.getElementById('menu');

btn.addEventListener('click', navtoggle)

function navtoggle(){

    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
