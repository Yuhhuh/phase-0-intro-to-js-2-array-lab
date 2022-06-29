// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(Chunk){
    cats.push(Chunk);
}

function destructivelyPrependCat(Uno){
    cats.unshift(Uno);
}

function destructivelyRemoveLastCat(Chunk){
    cats.pop(Chunk);
}

function destructivelyRemoveFirstCat(Uno){
    cats.shift(Uno);
}

function appendCat(Juno){
    const catsAgain = cats.slice();
    catsAgain.push(Juno);
    return catsAgain;
}

function prependCat(Pulla){
    const catsNice = cats.slice("Pulla");
    catsNice.unshift(Pulla);
    return catsNice;
}

function removeLastCat(){
    const catsRude = cats.slice();
    catsRude.pop("Garfield");
    return catsRude;
}

function removeFirstCat(){
    const catsRun = cats.slice();
    catsRun.shift("Milo");
    return catsRun;
}