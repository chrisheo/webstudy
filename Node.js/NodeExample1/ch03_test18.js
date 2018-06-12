var person1 = {name:'소녀시대',age:24};
var person2 = {name:'걸스데이',age:24};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km속도로 걸어갑니다.');
};

var person3 = new Person('소녀시대',20);
var person4 = new Person('티아라',33);

person3.walk(14);



