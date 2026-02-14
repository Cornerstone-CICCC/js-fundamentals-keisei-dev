var laugh = function(num) {
    var sound = "";
    for (var i = 0; i < num; i++) {
        sound += "ha";
    }
    return sound + "!";
};

console.log(laugh(3));
