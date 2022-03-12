let slide_index = 0
let slide_play = true
let slides =document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e =>{
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

//pause slide when hover slider

document.querySelector(".slide").addEventListener('mouseover', () => slide_play = false)

//enable slide when mouse leave out slider

document.querySelector(".slide").addEventListener('mouseleave', () => slide_play = true)

//slider controller

document.querySelector('.slide-next').addEventListener('click', () =>{
    prevSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () =>{
    nextSlide()
    showSlide()
})

showSlide()

/* setInterval(() =>{
    if(!slide_play) return
    nextSlide()
    showSlide()
}, 2000); */

//render product

let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')

products.forEach(e =>{
    let prod = '
            <div class="col-3 col-md6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart' ></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart' ></i>
                        </button>

                    </div>
                    <div class="product-card-name">
                        JBL Quantum 400
                    </div>
                    <div class="product-card-price">
                        <span><del>$300</del></span>
                        <span class="curr-price">$200</span>
                    </div>
                </div>
            </div>
        </div>
    '
})