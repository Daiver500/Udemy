//To string 

 console.log(typeof(String(null)));
 console.log(typeof(String(4)));

 console.log(typeof(5 + ''));

 const num = 5;

 console.log("https://vk.com/catalog/" + num);

 Obj.toString();
 const o = new Object();
 o.toString();
 console.log(o.toString());

 //To number

 console.log(typeof(Number("4")));

 console.log(typeof(+ "5"));

 console.log(typeof(parseInt("15px", 10)));

 let answer = +prompt("Hello", "");

 parseInt("10", 10);

 //To boolean 

 0, '', null, undefined, Nan; // всегда превращается в false

 let switcher = null;

 if(switcher) {
     console.log("Working...");
 }

 swticher = 1;

 if(switcher) {
    console.log("Working...");
}

console.log(typeof(Boolean("4")));

console.log(typeof(!!"4444"));