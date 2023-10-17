document.addEventListener("DOMContentLoaded", function () {
    
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".card-item");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");
      isRight = e.target.classList.contains("arrow-right");

      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }

      if (currentItem >= maxItems) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }

      items.forEach((item) => item.classList.remove("current-card"));

      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });

      items[currentItem].classList.add("current-card");
    });
  });

  var dropdown = document.getElementsByClassName("calculadora");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.maxHeight ) {
        dropdownContent.style.maxHeight = null;
      } else {
        dropdownContent.style.display = "block";
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
      }
    });
  }
  
});