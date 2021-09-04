//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, n) {
    n -= 1;
    let stepsTaken = 1;
    let arrLen = names.length;
    while (0 < Math.trunc(n / arrLen)) {
        n -= arrLen;
        arrLen *= 2;
        stepsTaken *= 2;
    }
    if (stepsTaken === 1) {
        return names[n];
    } else {
        return names[Math.floor(n / stepsTaken)];
    }
}

let names = ['Howard',
    'Leonard',
    'Penny',
    'Azuma',
    'Proto',
    'Daisuke Aramaki',
    'Sheldon',
    'Borma',
    'Saito',
    'Togusa',
    'Batou',
    'Pazu',
    'Yano',
    'Motoko Kusanagi'
];
console.log((whoIsNext(names, 1)));