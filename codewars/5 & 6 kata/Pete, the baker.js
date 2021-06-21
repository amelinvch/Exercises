//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let max = 0;
    let flag = true;
    while (flag) {
        for (let key in recipe) {
            if (available[key] == undefined) {
                return 0;
            } else {
                if (available[key] >= 0) {
                    available[key] -= recipe[key];
                } else {
                    return max - 1;
                }
            }
        }
        max++;
    }
}


const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
const recipe2 = { flour: 500, sugar: 200, eggs: 1 };
const available2 = { flour: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));
console.log(cakes(recipe2, available2));