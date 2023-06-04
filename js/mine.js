//                  product          //
let containerProductLapTop = document.querySelector('#containerProductLapTop')
let containerProductMobile = document.querySelector('#containerProductMobile')
let containerProductMonitor = document.querySelector('#containerProductMonitor')
let showProductDiscount = document.querySelector('#containerProductDiscount')
let listProduct = [
    {
        id: 1,
        number: 1,
        name: 'لپ تاپ asus شماره  ',
        price: '15,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ ایسوس 18 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 2,
        number: 2,
        name: 'لپ تاپ asus شماره  ',
        price: '20,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i5 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 3,
        number: 3,
        name: 'لپ تاپ asus شماره  ',
        price: '50,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ ایسوس 18 اینچ مدل LATITUDE E5540 پردازنده Core i11 رم 8GB هارد 1TB گرافیک 6GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 4,
        number: 4,
        name: 'لپ تاپ asus شماره  ',
        price: '7,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i5 رم 4GB هارد 128GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 5,
        number: 5,
        name: 'لپ تاپ asus شماره  ',
        price: '18,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i9 رم 8GB هارد 1TB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 6,
        number: 6,
        name: 'لپ تاپ dell شماره  ',
        price: '10,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 7,
        number: 7,
        name: 'لپ تاپ dell شماره  ',
        price: '32,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i9 رم 16GB هارد 1TB گرافیک 8GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 8,
        number: 8,
        name: 'لپ تاپ dell شماره  ',
        price: '4,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 2GB هارد 128GB گرافیک 512MB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 9,
        number: 9,
        name: 'لپ تاپ dell شماره  ',
        price: '120,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i11 رم 16GB هارد 2TB گرافیک 16GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '10%'
    },
    {
        id: 10,
        number: 10,
        name: 'لپ تاپ dell شماره  ',
        price: '15,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '0%'
    },

    {
        id: 11,
        number: 1,
        name: 'گوشی موبایل سامسونگ شماره ',
        price: '30,000,000',
        srcImg: 'productImg/kala7.jfif',
        details: 'گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت نسخه اسنپدراگون ',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '4%'
    },
    {
        id: 12,
        number: 2,
        name: 'گوشی موبایل سامسونگ شماره ',
        price: '25,000,000',
        srcImg: 'productImg/kala9.jfif',
        details: 'گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت نسخه اسنپدراگون ',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 13,
        number: 3,
        name: 'گوشی موبایل سامسونگ شماره ',
        price: '18,000,000',
        srcImg: 'productImg/kala10.jfif',
        details: ' گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 4G دو سیم کارت ظرفیت 64 گیگابایت و رم 3  گیگابایت نسخه اسنپدراگون',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 14,
        number: 4,
        name: 'گوشی موبایل اپل شماره ',
        price: '64,000,000',
        srcImg: 'productImg/kala4.jfif',
        details: ' گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 15,
        number: 5,
        name: 'گوشی موبایل اپل شماره',
        price: '45,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' گوشی موبایل اپل مدل iPhone 13  دو سیم‌ کارت ظرفیت 64 گیگابایت و رم 3 گیگابایت',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 16,
        number: 6,
        name: 'گوشی موبایل اپل شماره',
        price: '80,000,000',
        srcImg: 'productImg/kala6.jfif',
        details: ' گوشی موبایل اپل مدل iPhone 14  دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 17,
        number: 7,
        name: 'گوشی موبایل شیائومی شماره',
        price: '22,000,000',
        srcImg: 'productImg/kala16.jfif',
        details: 'گوشی موبایل شیائومی مدل Mi 11 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '2%'
    },
    {
        id: 18,
        number: 8,
        name: 'گوشی موبایل شیائومی شماره',
        price: '15,000,000',
        srcImg: 'productImg/kala12.jfif',
        details: 'گوشی موبایل شیائومی مدل Mi 11  دو سیم کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت',
        grouping: 'Mobile',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 19,
        number: 9,
        name: 'گوشی موبایل شیائومی شماره ',
        price: '10,000,000',
        srcImg: 'productImg/kala11.jfif',
        details: 'گوشی موبایل شیائومی مدل Mi 11 دو سیم کارت ظرفیت 32 گیگابایت و رم 3 گیگابایت',
        grouping: 'Mobile',
        existence: 'no',
        discount: '0%'
    }, {
        id: 20,
        number: 10,
        name: 'گوشی موبایل شیائومی شماره',
        price: '25,000,000',
        srcImg: 'productImg/kala17.jfif',
        details: 'گوشی موبایل شیائومی مدل Mi 11 Pro Max دو سیم کارت ظرفیت 1 ترابایت و رم 12 گیگابایت',
        grouping: 'Mobile',
        existence: 'yes',
        discount: '15%'
    },

    {
        id: 21,
        number: 1,
        name: 'مانیتور سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala18.jfif',
        details: 'مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ ',
        grouping: 'Monitor',
        existence: 'no',
        discount: '5%'
    },
    {
        id: 22,
        number: 2,
        name: 'مانیتور سامسونگ شماره ',
        price: 15,
        srcImg: 'productImg/kala19.jfif',
        details: 'مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'no',
        discount: '5%'
    },
    {
        id: 23,
        number: 3,
        name: 'مانیتور سامسونگ شماره  ',
        price: 15,
        srcImg: 'productImg/kala20.jfif',
        details: 'مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 24,
        number: 4,
        name: 'مانیتور سامسونگ شماره ',
        price: 15,
        srcImg: 'productImg/kala21.jfif',
        details: 'مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 25,
        number: 5,
        name: 'مانیتور سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala22.jfif',
        details: 'مانیتور مخصوص بازی سامسونگ مدل LF27T350FH-M سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 26,
        number: 6,
        name: 'مانیتور مسترتک شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala24.jfif',
        details: 'مانیتور مسترتک مدل GP279Q سایز 27 اینچ ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 27,
        number: 7,
        name: 'مانیتور مسترتک شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala18.jfif',
        details: 'مانیتور مسترتک مدل GP279Q سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 28,
        number: 8,
        name: 'مانیتور مسترتک شماره  ',
        price: '5,000,000',
        srcImg: 'productImg/kala21.jfif',
        details: 'مانیتور مسترتک مدل GP279Q سایز 27 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 29,
        number: 9,
        name: 'مانیتور مسترتک شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala20.jfif',
        details: 'مانیتور مسترتک مدل GP279Q سایز 27 اینچ ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 30,
        number: 10,
        name: 'مانیتور مسترتک شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala24.jfif',
        details: 'مانیتور مسترتک مدل GP279Q سایز 15 اینچ',
        grouping: 'Monitor',
        existence: 'yes',
        discount: '0%'
    },
]
let productLapTop = listProduct.filter(function (product) {
    return product.grouping === "LapTop"
})
productLapTop.forEach(function (laptop) {
    templateProduct(containerProductLapTop, laptop)
})
let productMobile = listProduct.filter(function (product) {
    return product.grouping === 'Mobile'
})
productMobile.forEach(function (mobile) {
    templateProduct(containerProductMobile, mobile)
})
let productMonitor = listProduct.filter(function (product) {
    return product.grouping === 'Monitor'
})
productMonitor.forEach(function (monitor) {
    templateProduct(containerProductMonitor, monitor)
})
let productDiscount = listProduct.filter(function (discount) {
    return discount.discount !== '0%' && discount.existence === 'yes'
})
productDiscount.forEach(function (productDiscount) {
    templateProduct(showProductDiscount, productDiscount)
})
function templateProduct(container, product) {
    container.insertAdjacentHTML('beforeend', '<div class="product" id="'+product.id+'">\n' +
        '    <div class="nameProduct">\n' +
        '        <h3> ' + product.name + ' ' + product.number + '</h3>\n' +
        '    </div>\n' +
        '    <div class="imgProduct">\n' +
        '        <img src="' + product.srcImg + '" alt="">\n' +
        '    </div>\n' +
        '    <div class="infoProduct">\n' +
        '        <div>\n' +
        '            <span>توضیحات :</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '        <span>' + product.details + '</span>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="priceProduct">\n' +
        '        <span>قیمت :</span><span>' + product.price + '</span>\n' +
        '        <span>تخفیف :</span><span> ' + product.discount + '</span>\n' +
        '    </div>\n' +
        '    <div class="btn-addCart-favorite">\n' +
        '        <button>افزودن به سبد خرید</button>\n' +
        '        <button>افزودن به علاقه مندی</button>\n' +
        '    </div>\n' +
        '</div>')

}

function informationProduct(productId) {
    location.href = 'productInfo.html?id=' + productId + ''
}

let divProduct = document.querySelectorAll('.product')
divProduct.forEach(function (divPro) {
    divPro.addEventListener('click', function () {
        informationProduct(divPro.id)
    })
})

//                      showMenuBarMO               //
let showMenuBarMO = document.querySelector('#showMenuBarMO')
let menuBarMo = document.querySelector('.menuBarMo')
let closedMenuBarMO = document.querySelector('#closedMenuBarMO')
let menuMO = document.querySelector('.menuMO')
showMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '1rem'
    menuBarMo.style.visibility = 'visible'

})
closedMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '500px'
    menuBarMo.style.visibility = 'hidden'
})


