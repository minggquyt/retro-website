export default function RetangleProductCard(srcImg, name, desc) {
    return (
        `<div class="body__bestselling_product--item-section2 bestselling_product--section2-item1">
                    <div class="body__bestselling_product--item-section2--content">
                        <h1 class="oswald-500">${name}</h1>
                        <p class="oswald-300">${desc}</p>
                    </div>
                    <img src=${srcImg} class="body__bestselling_product--item-section2--image">
                    <button class="cta-button oswald-400" href="#">More Products
                        <div>
                            <img src="/assets/images/icon/lock-icon.svg" width=18 height=20>
                        </div>
                    </button>
        </div>`
    )
}