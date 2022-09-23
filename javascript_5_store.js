class Users {
    constructor(userId, userAddress, birthday, orders, activeCoupon) {
        this.userId = userId;
        this.userAddress = userAddress;
        this.birthDay = birthday;
        this.orders = orders;
        this.activeCoupon = activeCoupon;
    }
}

class Order {
    constructor(orderId, shopList) {
        this.orderId = orderId;
        this.shopList = shopList;
    }
}

class Product {
    constructor(id, name, description, color, photo, price, rating, discount) {
        this.productId = id;
        this.productName = name;
        this.description = description;
        this.color = color;
        this.productPhoto = photo;
        this.productPrice = price;
        this.rating = rating;
        this.discount = discount;
        this.productFinalPrice = this.getFinalPrice;
        this.productDiscountLabel = this.setDiscountLabel;
    }

    getSalePercent() {
        return (this.discount < 1 && this.discount >= 0) ? this.discount * 100 : this.discount;
    }

    getFinalPrice() {
        return this.productPrice - (this.productPrice * (this.getSalePercent() / 100));
    }

    render(product) {
        return `<div class="good">
                    <div>Наименование: ${product.productName}</div>
                    <div>Описание: ${product.description}</div>
                    <div>Цена за шт. (без скидки): ${product.productPrice}</div>
                    <div>Цена за шт. (со скидкой): ${product.getFinalPrice()}</div>
                </div>`;

    }

}

class Coupon {
    constructor(idCoupon, couponType, couponDiscount, couponDuration, secretCode, userInputCode) {
        this.idCoupon = idCoupon;
        this.status = this.couponActivate;
        this.couponType = couponType;
        this.couponDiscount = couponDiscount;
        this.couponDuration = couponDuration;
        this.secretCode = secretCode;
        this.userInputCode = userInputCode;
    }

    getCouponInfo() {
        if (this.couponType == 'percent') {
            return `Скидка по купону ${this.idCoupon} - ${this.couponDiscount * 100}%\nСрок действия - ${this.couponDuration} дней`;
        } else if (this.couponType == 'amount') {
            return `Скидка по купону ${this.idCoupon} - ${this.couponDiscount} руб.\nСрок действия - ${this.couponDuration} дней`;
        }
    }

    couponActivate() {
        return (this.userInputCode == this.secretCode) ? 0 : -1
    }

}

// тестовые товары

const id_000_001 = new Product(000001,
    'Мяч',
    'Мяч',
    ['зеленый', 'синий', 'красный'],
    ['id000001_1.jpg', 'id000001_2.jpg', 'id000001_3.jpg',],
    450,
    4.5,
    0.1)

const id_000_002 = new Product(000002,
    'Обувь',
    'Спортивная обувь с ортопедической стелькой',
    ['черный', 'белый'],
    ['id000002_1.jpg', 'id000002_2.jpg', 'id000003_3.jpg', 'id000004_3.jpg',],
    6000,
    4.8,
    0.0)

const id_000_003 = new Product(000003,
    'Футболка',
    'Футболка для пробежек и прогулок',
    ['оранжево-зеленая', 'сине-красная', 'бело-черная'],
    ['id000003_1.jpg', 'id000003_2.jpg', 'id000003_3.jpg', 'id000003_3.jpg',],
    3500,
    3.8,
    0.2)


// тестовые купоны

const blackFridayCoupon2021 = new Coupon('Черная пятница', 'percent', 0.1, 14, 'BF2021', '');
const happyBirthDay = new Coupon('С Днем Рождения', 'amount', 500, 30, 'HappyBirthday2021', 'HappyBirthday2021');

// тестовый заказ и пользователь

const testOrder = new Order(0001, [id_000_001, id_000_003, id_000_003, id_000_002]);
const testUser = new Users(00001, 'Москва', '1989-03-25', testOrder, [blackFridayCoupon2021, happyBirthDay])

// одна корзина одного пользователя для одного заказа

const basket = {
    productList: null,
    cartButton: null,
    products: testOrder.shopList,
    coupons: testUser.activeCoupon,


    basketFullPrice() {
        let basketPrice = 0;
        for (product of this.products) {
            basketPrice += product.productPrice;
        }
        return basketPrice;
    },

    discountInBasket() {
        let discount = 0;
        for (let i = 0; i < this.products.length; i++) {
            discount += this.products[i].productPrice * this.products[i].discount;
        }
        return -discount;
    },

    couponInBasket() {
        let amountOfCoupon = 0;
        for (let i = 0; i < this.coupons.length; i++) {
            if (this.coupons[i].status()) {
                if (this.coupons[i].couponType === 'percent') {
                    amountOfCoupon += this.basketFullPrice() * this.coupons[i].couponDiscount;
                } else if (this.coupons[i].couponType === 'amount') {
                    amountOfCoupon += this.coupons[i].couponDiscount;
                }
            }
        }
        return -amountOfCoupon;
    },

    countBasketPrice() {
        return this.basketFullPrice() + this.discountInBasket() + this.couponInBasket(); // 
    },

    init() {
        this.productList = document.querySelector('.item-list');

        this.render();
        this.clearBasketButton = document.querySelector('.clear-btn');
        this.clearBasketButton.addEventListener('click', () => this.clearBasket());
    },

    render() {
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                this.productList.insertAdjacentHTML('beforeend', this.products[i].render(this.products[i]));
            }
            this.productList.insertAdjacentHTML('beforeend',
                `<br>В корзине ${this.products.length} товар(-ов) на сумму: ${this.basketFullPrice()} руб. без скидок
                <br><br>Сумма скидки купонов: ${-this.couponInBasket()} руб.
                <br>Сумма с учетом всех скидок: ${this.countBasketPrice()} руб.
                <br><br><button class="clear-btn">Очистить корзину</button>`)
        } else {
            this.productList.textContent = 'Корзина очищена';
        }
    },

    clearBasket() {
        this.products = [];
        this.render();
    },

}

basket.init();

