const productDOM = document.querySelector(".product__center");
const cartDOM = document.querySelector(".cart");
const cartContent = document.querySelector(".cart__centent");
const openCart = document.querySelector(".cart__icon");
const closeCart = document.querySelector(".close__cart");
const overlay = document.querySelector(".cart__overlay");
const cartTotal = document.querySelector(".cart__total");
const clearCartBtn = document.querySelector(".clear__cart");
const itemTotals = document.querySelector(".item__total");

let cart = [];

let buttonDOM = [];

class UI {
    displayProducts(products) {
        let results = "";
        products.forEach(({ title, price, image, id }) => {
            results += `<!-- Single Product -->
       <div class="product">
                  <div class="image__container">
                    <img src="${image}" alt="" />
                  </div>
                  <div class="product__footer">
                    <h1>The Original Super Donut</h1>
                    <div class="rating">
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>
                            <i class="fas fa-star"></i>
                        </span>
                        <span>
                            <i class="far fa-star"></i>
                        </span>
                    </div>
                    <div class="bottom">
                      <div class="btn__group">
                        <a href="#" class="btn addToCart">Add to Cart</a>
                        <a href="#" class="btn view">View</a>
                      </div>
                      <div class="price">$255.99</div>
                    </div>
                  </div>
                </div>
      <!-- End of Single Product -->`;
        });

        productDOM.innerHTML = results;
    }
}
    class Products {
    async getProducts() {
        try {
            const result = await fetch("appsettings.json");
            const data = await result.json();
            const products = data.items;
            return products;
        } catch (err) {
            console.log(err);
        }
    }
}

class Storage {
    static saveProduct(obj) {
        localStorage.setItem("products", JSON.stringify(obj));
    }
}
    document.addEventListener("DOMContentLoaded", async () => {
        const productList = new Products();
        const ui = new UI();

    

        const products = await productList.getProducts();
     
    });