import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close')

burger.addEventListener('click', ()=>{
    menu.classList.add('menu_open')

    close.addEventListener('click', ()=>{
        menu.classList.remove('menu_open')
})
}
)

Swiper.use([Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto", // сколько слайдов показывать
  spaceBetween: 16,
  observer: true, // проверка находится ли элемент в области видимости
  breakpoints: {
    1119: {
      enabled: false,
    }, // значение когда нужно сломать swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});