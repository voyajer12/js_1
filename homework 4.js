// ДЗ 4

// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

1.

function numToObject(number) {
    if (number > 0 && number < 999 && Number.isInteger(number)) {
        return console.log({
            'единицы': number % 10,
            'десятки': Math.floor(number / 10) % 10,
            'сотни': Math.floor(number / 100),
        });
    }

    console.log('Нужно ввести число от 0 до 999');
    return {};
};

numToObject(432);



// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


// 2.


const basket = {
    products: [
        {
            productId: 500,                                
            productName: 'Мяч',                             
            productPhoto: ['id500_ball_preview.jpg'],       
            productPrice: 450,                     
            productStockBalance: 'info_from_php_and_sql',   
            quantity: 2,                          
        },
        {
            productId: 300,
            productName: 'Обувь',
            productPhoto: ['id300_shoes_preview.jpg'],
            productPrice: 6000,
            productStockBalance: 'info_from_php_and_sql',
            quantity: 1,
        },
        {
            productId: 140,
            productName: 'Футболка',
            productPhoto: ['id140_t-shirt_preview.jpg'],
            productPrice: 1000,
            productStockBalance: 'info_from_php_and_sql',
            quantity: 3,
        }
    ],

    countBasketPrice() {
        let basketPrice = 0;
        for (let i = 0; i < this.products.length; i++) {
            basketPrice += this.products[i].productPrice * this.products[i].quantity
        }
        return basketPrice;
    },

}

console.log('Общая сумма: ' + basket.countBasketPrice());