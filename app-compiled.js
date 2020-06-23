"use strict";

require("core-js/modules/es.array.map");

console.log('hallo');
var myfiles = [1, 3, 5, 6];
myfiles.map(function (file) {
  return console.log(file);
});
