import $ from "jquery" //если jquery используется отдельно от вебпака, она подключается перед остальными скриптами

// const btn = $("#btn")     // получаем элемент через id (аналог querySelector), Значок $ этол функция
// console.log(btn)

$(document).ready(function(){            // проверяем готовность DOM к работе аналог window.addEventListener("DOMContentLoaded", () => {});
   $(".list-item:first").hover(function() { // находим первый элемент списка и реализуем на нем hover
      $(".list-item:first").toggleClass("active");  // переключаем класс
   });
   
   $(".list-item:eq(2)").on("click", function() {    // выбираем конкретный элемент и назначаем обработчик аналог addEventListener
      $(".image:even").fadeToggle("slow")                                      // только четные элементы
   })      
   
   $(".list-item:eq(4)").on("click", function() {   
    $(".image:odd").animate({
        opacity: "toggle",
        height: "toggle"
    }, 2000)                                     
 })    
});