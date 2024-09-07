const number = [2,5,7,5, 6,3, 6,2,8];
function uniqSortNumber(number){
    number = number.filter((num, index) => number.indexOf(num) === index);
    return number.sort();
}
console.log(uniqSortNumber(number));