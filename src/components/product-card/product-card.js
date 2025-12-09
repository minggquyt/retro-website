import CTAButton from "../cta-button/cta-button.js"

export default function ProductCard(productName, desc, imagePath, rootPrice){
    return (
        `<div class="product-card">
                    <div class="product-card--image">
                        <div class="product-card--statusproduct oswald-400">
                            <div class="product-card--statusproduct--sale--like">
                                <img src="./assets/images/products/like.svg" width="21px" height="18px" alt="">
                            </div>
                        </div>
                        <img class="avatar" src=${imagePath} width="231px"
                            height="157px" alt="">
                    </div>
                    <div class="product-card--description">
                        <h1 class="oswald-500">${productName}</h1>
                        <p class="oswald-300">${desc}</p>
                        <div class="product-card--description--cost">
                            <div class="product-card--description--costnumber oswald-400">
                                <h1 class="active">${rootPrice}</h1>
                            </div>
                            ${CTAButton("Cart","/assets/images/products/cart.svg",15,13)}
                        </div>
                    </div>
        </div>`
    )
}