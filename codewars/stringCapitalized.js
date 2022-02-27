
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.replace(word[0], (char) => char.toUpperCase())).join(' ');
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
