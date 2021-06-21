//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript


function wave(str) {
    let arr = [];
    let arrSlovo = str.split('');
    for (let j = 0; j < arrSlovo.length; j++) {
        arrSlovo[j] = arrSlovo[j].toLowerCase();
    }
    for (let i = 0; i < arrSlovo.length; i++) {
        if (arrSlovo[i] != ' ' && arrSlovo[i] != ',') {
            arrSlovo[i] = arrSlovo[i].toUpperCase();
            arr.push(arrSlovo.join(''));
            arrSlovo[i] = arrSlovo[i].toLowerCase();
        }
    }
    return arr;
}

console.log(wave("Gap , gAp , gaP"));
console.log(wave("Two words"));