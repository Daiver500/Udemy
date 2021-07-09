// <script defer src="js/script.js"></script>  прописывается в разметке html, когда скрипт идет перед всей разметкой 
// defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт. 
// Скрипт в defer никогда не блокирует страницу, также всегда выполняются, когда DOM дерево уже готово
// Благодаря defer скрипты можно загружать по очереди

// <script async src="js/script.js"></script> страница не ждет асинхронные скрипты, domcontentloaded и async не ждут друг друга, загружается как только будет готов, 
// не ждет другие скрипты, полностью независимый


//Динамические загружаемые скрипты (ниже) ведут себя как async
const script = document.createElement("script");
script.src = "js/test.js";
script.async = false; // можно сделать так, чтобы скрипт вел себя как обычный скрипт
document.body.append(script);

const loadScript = (src) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = false; // можно сделать так, чтобы скрипт вел себя как обычный скрипт
  document.body.append(script);
};
loadScript("js/test.js");  // так как async=false, скрипты будут друг за другом срабатывать
loadScript("js/some.js");