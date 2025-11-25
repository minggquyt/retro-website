export default function getProductsData(){
    return fetch("/assets/data/products/products.json")
        .then(response => response.json())
        .then((data) => data)
        .catch(err => console.log(err));

}