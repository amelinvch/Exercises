'use strict';

console.log('Запрос данных');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Поготовка данных');
        const product = {
            name: 'TV',
            price: 2000
        };

        setTimeout(() => {
            product.status = 'order';
            console.log(product);
        }, 2000);
    }, 2000);
});