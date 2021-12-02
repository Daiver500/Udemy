
window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/calculator'),
        modal = require('./modules/card'),
        timer = require('./modules/modal'),
        card = require('./modules/server'),
        calculator = require('./modules/slider'),
        server = require('./modules/tabs'),
        slider = require('./modules/timer');
    
    tabs();
    modal();
    timer();
    card();
    calculator();
    server();
    slider();
});
