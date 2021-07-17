//Tabs

const tabsContent = document.querySelectorAll(".tabcontent");
const tabsHeader = document.querySelectorAll(".tabheader__item");
const tabsHeaderContainer = document.querySelector(".tabheader__items");

const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show", "fade");
  });
  tabsHeader.forEach((item) => {
    item.classList.remove("tabheader__item--active");
  });
};

const showTabContent = (i) => {
  tabsContent[i].classList.remove("hidden");
  tabsContent[i].classList.add("show", "fade");
  tabsHeader[i].classList.add("tabheader__item--active");
};

hideTabContent();
showTabContent(0);

tabsHeaderContainer.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target && target.classList.contains("tabheader__item")) {
    tabsHeader.forEach((item, i) => {
       if (target === item) {
        hideTabContent();
        showTabContent(i);
       }
    }) 
  }
});