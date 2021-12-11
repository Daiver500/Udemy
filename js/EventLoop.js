"use strict"

console.log(1)

setTimeout(() => {
    console.log("timeout")
}, 4000)

setTimeout(() => {
    console.log("timeout_4000")
}, 4000)

console.log(2)

// асинхронные операции это операции которые запускаются с течением определенного времени (setTimeout, setInterval, запросы на сервер)
// также все callback являются асинхронными