const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars '

}
var typed= new Typed(".text",{
	strings: ["Web developer,","Coder,","Student."],
	loop: true,
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 100
});

const percentBars = document.querySelectorAll('.percent');

// Function to animate the percent bars
function animatePercentBars(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = parseInt(bar.innerText, 10);
      let currentWidth = 0;

      function updateWidth() {
        currentWidth += 1;
        bar.style.width = currentWidth + '%';

        if (currentWidth < width) {
          requestAnimationFrame(updateWidth);
        }
      }

      requestAnimationFrame(updateWidth);

      observer.unobserve(bar); // Stop observing once animation is triggered
    }
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(animatePercentBars, { threshold: 0.5 });

// Observe each percent bar element
percentBars.forEach(bar => {
  observer.observe(bar);
});

// Call the animatePercentBars function when the page loads
window.addEventListener('load', animatePercentBars);


document.addEventListener("DOMContentLoaded", function() {
	var educationItems = document.querySelectorAll(".education > .ed > div");
  
	var animateItems = function() {
	  educationItems.forEach(function(item, index) {
		var rect = item.getBoundingClientRect();
		var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
		if (rect.top < viewportHeight) {
		  item.style.opacity = 1; /* Set opacity to 1 to fade in */
		  item.style.transition = "opacity 1s ease, transform 1s ease " + (index * 0.3) + "s"; /* Add delay based on index */
		  item.style.transform = "scale(1)"; /* Apply scale transform to animate */
		}
	  });
	};
  
	animateItems(); /* Initial animation on page load */
  
	window.addEventListener("scroll", animateItems);
  });
  