var navContainer = document.getElementById("navContainer"),
   chevron = document.getElementById("chevron");

chevron.onclick = () => {
   if (navContainer.style.width === "150px") {
      navContainer.style.width = "55px";

      chevron.classList.remove("fa-chevron-left");

      chevron.classList.add("fa-chevron-right");
   } else {
      navContainer.style.width = "150px";

      chevron.classList.remove("fa-chevron-right");

      chevron.classList.add("fa-chevron-left");
   }
};
// const onLoad = () => {
//    let iconTitle = document.getElementsByClassName("iconTitle");
//    if (navContainer.style.width === "55px") {
//       let iconTitle = document.getElementsByClassName("iconTitle");
//       for (let i = 0; i < iconTitle.length; i++) {
//          iconTitle[i].style.display = "none";
//       }
//    } else {
//       for (let i = 0; i < iconTitle.length; i++) {
//          let iconTitle = document.getElementsByClassName("iconTitle");
//          iconTitle[i].style.display = "inline";
//       }
//    }
// };
