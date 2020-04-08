var sega = ["sonic","tails","knuckles","rouge","shadow", "eggman"];
sega = sega.map(function(x){ return x.toUpperCase() })
toUpper = function(x){ 
  return x.toUpperCase();
};
sega = sega.map(toUpper);
console.log(sega);