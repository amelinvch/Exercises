//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, n) {
    let max = 1;
    for (let count = 6;; count += (count * 2)) {
        if ((n / count) <= 1) {
            console.log(count);
            return max;
        }
        max += 1;
    }
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log((whoIsNext(names, 19)));