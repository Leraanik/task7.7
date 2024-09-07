function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person ={
    name: 'Lera',
    age: 19
}
printInfo.call(person);