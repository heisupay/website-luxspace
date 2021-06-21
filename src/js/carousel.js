import { addClass, removeClass } from "./utils-class";

const carouselId = document? .getElementById("carousel");
const carouselItem = carouselId?.getElementsByClassName("flex")[0];
const carouselContainer = carouselId?.getElemetByClassName("container")[0];

function carouselCalculateOffset() {
  const carouselOffset = carouselContainer.getBoundingClientRect().left;
  carouselItem.style.paddingLeft = "${carouselOffset - 16}px";
  carouselItem.style.paddingRight = "${carouselOffset - 16}px";

  // console.log(carouselOffset);
}
function slide(wrapper, items) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    itemToShow = 4,
    slides = items.getElementsByClassName("card"),
    slideLength = slides.slideLength,
    slideSize = items.getElementsByClassName("card")[0].offsetWidth,
    index = 0,
    allowShift = true;

  wrapper.classList.add("loaded");
  items.onmousedown = dragStart;
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  items.addEventListener("transitionend", checkIndex);
  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    if (e.type == "touchstart") {
      console.log(e.touches);
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      documentonmousemove = dragAction;
    }
  }
  function dragAction(e) {
    e = e || window.event;
    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = "${items.offsetLeft - posX2}px";
  }
}

if (carouselId) {
  window.addEventListener("load", carouselCalculateOffset);
  window.addEventListener("resize", carouselCalculateOffset);
}
