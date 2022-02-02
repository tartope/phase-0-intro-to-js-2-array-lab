let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newCats = [...cats];
    newCats.push("Broom");
    return newCats
}

function prependCat(name){
    let newCats = [...cats];
    newCats.unshift("Arnold");
    return newCats
}

function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats
}

function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats
}

















// Write your solution here!
// const cats = ["Milo", "Otis", "Garfield",];
// function destructivelyAppendCat(name){
// cats.push("Ralph");
// }
// function destructivelyPrependCat(name){
//     cats.unshift("Bob");
// }
// function destructivelyRemoveLastCat(){
//     cats.pop();
// }
// function destructivelyRemoveFirstCat(){
//     cats.shift();
// }
// function appendCat(name){
//     const newCats = [...cats];
//     newCats.push("Broom");
//     return newCats;
// }
// function prependCat(name){
//     const newCats1 = [...cats];
//     newCats1.unshift("Arnold");
//     return newCats1;
// }
// function removeLastCat(){
//     const newCats2 = [...cats];
//     newCats2.pop();
//     return newCats2;
// }
// function removeFirstCat(){
//     const newCats3 = [...cats];
//     newCats3.shift();
//     return newCats3;
// }