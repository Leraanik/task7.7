const person ={
    fullName: 'PolinaAnd'
}

function setFullName(per, name){
    per.fullName = name;
}
const name = setFullName.bind(null,person);
name('John Smith');
console.log(person.fullName);
