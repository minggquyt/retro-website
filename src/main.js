import CTAButton from "./components/cta-button/cta-button.js";
import ProductCard from "./components/product-card/product-card.js";
import RenderParts from "./data/render-parts/render-parts-data.js";
import getProductsData from "./services/get-products-data.js";
import RetangleProductCard from "./components/retangle-product-card/retangle-product-card.js";

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
            data[0].content.forEach( (e,index) => {
                renderPart.innerHTML += ProductCard(e.name,e.description,e.images,e.price.root);

                const renderSALE = document.getElementsByClassName("product-card--statusproduct");
                const status = document.createElement("div");
                status.classList.add(`product-card--statusproduct--${e.tags[0].toLowerCase()}`);
                status.textContent = `${e.tags[0]}`;
                renderSALE[index].prepend(status);

                if(e.price.discount != null){
                        const renderCost = document.querySelector(".product-card--description--costnumber");
                        const discount = document.createElement("h1");
                        discount.classList.add("unactive");
                        renderCost.appendChild(discount); // vì sao lại chưa append được phần tử con ? 
                }

            });
        })
        .catch(err => console.log(err))
}

function renderBestSellingProductsSection2(){
    const renderPart = document.querySelector(".body__bestselling_product--items-section2");

    getProductsData()
        .then((data) => {
            data[1].content.forEach((card) => {
                renderPart.innerHTML += RetangleProductCard(card.images,card.name,card.description);
            })
        })
        .catch((error) => console.log(error));

}

function renderPopularProducts(){
    const renderDiv = document.querySelector(".body__popular_products--items");

    getProductsData()
        .then((data) => {
            data[2].content.forEach((card) => {
                renderDiv.innerHTML += ProductCard(card.name,card.description,card.images,card.price.root);
            })
        })
        .catch((err) => console.log(err));
}

function main() {
    renderCTAButtonInParts(...RenderParts);
    renderBestSellingProductsSection1();
    renderBestSellingProductsSection2();
    renderPopularProducts();
}
main();

// Today task: 
// 1. chỉnh lại CSS cho menubar
// 2. Làm hoàn thiện responsive cho tablet 
// 3. Code hoàn thiện trang chủ 
// 3. Xử lý bug chưa render ra được các sản phẩm có giá giảm