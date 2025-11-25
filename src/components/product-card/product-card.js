export default function ProductCard(){
    return (
        `<div class="body__bestselling_product--item">
                    <div class="body__bestselling_product--image">
                        <div class="body__bestselling_product--statusproduct">
                            <div class="body__bestselling_product--statusproduct--sale oswald-500">
                                SALE
                            </div>
                            <div class="body__bestselling_product--statusproduct--sale--like">
                                <img src="./assets/images/products/like.svg" width="21px" height="18px" alt="">
                            </div>
                        </div>
                        <img class="avatar" src="./assets/images/products/computer-mouse.png" width="231px"
                            height="157px" alt="">
                    </div>
                    <div class="body__bestselling_product--description">
                        <h1 class="oswald-500">ARGB Gaming Mouse</h1>
                        <p class="oswald-300">Lorem Ipsum, giving information on its origins</p>
                        <div class="body__bestselling_product--description--cost">
                            <div class="body__bestselling_product--description--costnumber">
                                <h1 class="active oswald-400">$10.52</h1>
                                <h1 class="unactive oswald-400">$20.52</h1>
                            </div>
                        </div>
                    </div>
            </div>`
    )
}