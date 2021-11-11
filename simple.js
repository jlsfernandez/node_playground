var count = 0;
exports.next = function() {return count++;}
exports.hello = function() {
    return "Hello world";
}
console.log(__dirname);