function Coder(name, age) {
    this.name = name;
    this.age = age;
}
Coder.prototype.coding = function () {
    console.log("I'm " + this.name + " I'm coding!");
}
var test = new Coder('Daniel', '28');
test.coding();