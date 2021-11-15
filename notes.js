//notes from study on factory functions and module pattern to refer to:



//create a factory function that returns an object


const factoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`~~~~~~~${capitalizeString()}~~~~~~~`);
    return {printString}
}

const burrito = factoryFunction("burrito");

// printString() //error
// capitalizeString() //error
// burrito.capitalizeString() //error
burrito.printString() //prints burrito
console.log(burrito)



//use iheritance in objects using the factory pattern

const burritoFactory = string => {
    const {printString} = factoryFunction(string); //inherit that method
    let arr = [];
    const addToArray = (string) => arr.push(string); //this is private
    const printArray = () => addToArray(string);console.log(arr);
    return{printString, printArray};        
    };

const taco = burritoFactory("taco");
taco.printString();
taco.printArray();


//module pattern

var myModule = (function()
{
       'use strict';
        var _privateProperty = "Hello world";
        function _privateMethod(){console.log(_privateProperty);}
        return{publicMethod : function(){_privateMethod()}}       
})();

myModule.publicMethod();