function largeGroupPositions(s) {
    let number = [];
    let array = s.split('');
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        let num = array[i + 1];
        if (array[i] != num) {
            count = 0;
        } else if (array[i] == num) {
            count++;
        }
        if (count >= 3) {
            number.push([i, i + count]);
        }
    }
    console.log(number);
}


let s = "abbxxxxzzy";
largeGroupPositions(s);