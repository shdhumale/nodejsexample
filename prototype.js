function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.nationality)