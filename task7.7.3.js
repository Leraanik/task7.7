const array = [
    {name: 'Jone', age: 16},
    {name: 'Alica', age: 29},
    {name: 'Lord', age: 42},
    {name: 'Vali', age: 9},
    ]
const oldPeople = array.filter((age) => {
    return age.age >= 18;
});
console.log(oldPeople);
const namePeople = oldPeople.map((name) => {
    return name.name;
});
console.log(namePeople);