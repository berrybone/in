const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Bottom NAv code 
var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("mobile-bottom-nav__item--active");
		})
		this.classList.add("mobile-bottom-nav__item--active");
	});
});

// code for loader

// JavaScript to show/hide the loading overlay
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      // Hide the loading overlay when the page is fully loaded
      document.getElementById("overlay").style.visibility = "hidden";
    } else {
      // Show the loading overlay while the page is loading
      document.getElementById("overlay").style.visibility = "visible";
    }
  };
  
//   code for Toast
function showToast() {
  const toast = document.querySelector('.toast');
  const progressBarInner = document.querySelector('.progress-bar-inner');
  toast.style.display = 'block';
  let width = 0;
  const interval = setInterval(() => {
      if (width >= 100) {
          clearInterval(interval);
          setTimeout(() => {
              toast.style.display = 'none';
          }, 500);
      } else {
          width++;
          progressBarInner.style.width = width + '%';
      }
  }, 30);
}