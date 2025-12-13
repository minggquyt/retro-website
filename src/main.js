import ProductCard from "./components/product-card/product-card.js";
import getProductsData from "./services/get-products-data.js";
import RetangleProductCard from "./components/retangle-product-card/retangle-product-card.js";

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
    renderBestSellingProductsSection1();
    renderBestSellingProductsSection2();
    renderPopularProducts();
}
main();




