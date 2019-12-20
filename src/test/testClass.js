//使用 class 改写原生的对象原型写法
class Coder {
    //constructor 是构造方法，该方法里面的 this 代表实例对象，也就是说，之前的构造函数，对应了 ES6 的构造方法。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //在 ES6 类中定义方法的时候，不需要关键字 function，直接把函数定义放进去就可以了
    coding() {
        console.log("I'm " + this.name + " I'm coding!");
    }
}
var test = new Coder('Daniel', '28');
test.coding();
console.log(typeof (Coder));//function
console.log(Coder === Coder.prototype.constructor);//true