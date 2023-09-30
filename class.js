var mainClass = /** @class */ (function () {
    function mainClass(name, id) {
        this.name = name;
        this.id = id;
    }
    return mainClass;
}());
var user = new mainClass("Moksh", 1);
console.log(user.id);
