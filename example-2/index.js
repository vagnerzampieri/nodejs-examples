/*
    index.js
    console.log("Hello");
    
    index2.js - This way we have a cache
    require("./index.js");
    require("./index.js");

    index2.js - This way we not have a cache
    require("./index.js")();
    require("./index.js")();
*/

module.exports = {
  f1: () => {
    console.log("Hello");
  }
};
