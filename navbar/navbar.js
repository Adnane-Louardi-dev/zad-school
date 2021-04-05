let humburger = document.getElementById("humburger"),
   navContainer = document.getElementById("navContainer"),
   chevron = document.getElementById("chevron"),
   iconTitle = document.getElementById("iconTitle");

const sideBareEffect = () => {
   if (navContainer.style.width == "5%") {
      navContainer.style.width = "15%";

      chevron.classList.remove("fa-chevron-right");
      chevron.classList.add("fa-chevron-left");
   } else {
      navContainer.style.width = "5%";

      chevron.classList.remove("fa-chevron-left");
      chevron.classList.add("fa-chevron-right");
   }
};
