import CTAButton from "./components/cta-button/cta-button.js";
import RenderParts from "./data/render-parts/render-parts-data.js";
import getProductsData from "./services/get-products-data.js";

function renderCTAButton(importClass, title, srcImage, width, height, imgWidth, imgHeight, index) {
    const element = document.querySelector(importClass);
    element.innerHTML += CTAButton(title, srcImage, imgWidth, imgHeight);
    const CTAbutton = document.querySelectorAll('.cta-button')[index];
    CTAbutton.style.width = width;
    CTAbutton.style.height = height;
}

function renderCTAButtonInParts(...parts) {
    parts.forEach((part, index) => {
        renderCTAButton(part.className, part.buttonName, part.srcImg, part.width, part.height, part.imgWidth, part.imgHeight, index);
    })
}

function renderBestSellingProductsSection1() {
    const renderPart = document.querySelector(".body__bestselling_product--items-section1");

    getProductsData()
        .then((data) => {
            data[0].content.forEach((e, index) => {
                renderPart.innerHTML += `
                <div class="body__bestselling_product--item-section1 ${`bestselling_product--section1-item${index + 1}`}">
                    <div class="body__bestselling_product--image">
                        <div class="body__bestselling_product--statusproduct">
                            <div class="body__bestselling_product--status${index+1}">
                                
                            </div>
                            <div class="body__bestselling_product--statusproduct--sale--like">
                                <img src=${e.images.likeIcon} width="21px" height="18px" alt="">
                            </div>
                        </div>
                        <img class="avatar" src=${e.images.main} width="231px"
                            height="157px" alt="">
                    </div>
                    <div class="body__bestselling_product--description">
                        <h1 class="oswald-500">${e.name}</h1>
                        <p class="oswald-300">${e.description}</p>
                        <div class="body__bestselling_product--description--cost">
                            <div class="body__bestselling_product--description--costnumber">
                                <h1 class="active oswald-400">$10.52</h1>
                                <h1 class="unactive oswald-400">$20.52</h1>
                            </div>
                            ${CTAButton("Cart","/assets/images/products/cart.svg",15,13)}
                        </div>
                    </div>
                </div>
                `

                const status = document.querySelector(`.body__bestselling_product--status${index+1}`);
                e.tags.forEach((e) => {
                    status.innerHTML += `
                        <div class="body__bestselling_product--statusproduct--${e.toLowerCase()} oswald-500">
                            ${e}
                        </div>
                    `
                })

                
            });
        })
        .catch(err => console.log(err))
}

function renderBestSellingProductsSection2(){
    const renderPart = document.querySelector(".body__bestselling_product--items-section2");

}

function main() {
    renderCTAButtonInParts(...RenderParts);
    renderBestSellingProductsSection1();
    renderBestSellingProductsSection2();
}
main();