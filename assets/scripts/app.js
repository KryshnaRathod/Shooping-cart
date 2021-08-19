

class Product{
    name;
    price;
    description;
    imageurl;
    isMadeInIndia = true;

    constructor(name,price,description,imageurl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageurl = imageurl;
    }

}

const p1 = new Product('Tea powder', 250,'beverage','https://www.maxpixel.net/static/photo/1x/Bed-Linings-Bedclothes-Bedding-Pillow-4321545.jpg');
const p2 = new Product('Sugar', 150,'Essenial', 'https://www.maxpixel.net/static/photo/1x/Bed-Linings-Bedclothes-Bedding-Pillow-4321545.jpg');

class ShoppingCart{
  items = [];

  addProduct(product){
    this.items.push(product);
    console.log("Shopping cart item list....",this.items);
    this.totalOutput.innerHTML = `<h2> Total : ${1}</h2>`;
  }

  display(){
    const cartElement = document.createElement('section');
    cartElement.innerHTML= `
    <h2> Total : ${0} INR </h2>
    <button>Proceed to payment</button>
    `
    cartElement.className='cart';
    this.totalOutput = cartElement.querySelector('h2');
    return cartElement;
  }
}

class Shop {
  
   display(){
    const renderHook = document.getElementById('app');

    //add cart to shop class --- {}
    this.cart = new ShoppingCart(); ///here this --- object of class Shop
    //{cart object}
    const cartElement = this.cart.display(); //of shopping cart
    const productList = new ProductList();
    const productElement = productList.display();
    renderHook.append(cartElement);
    renderHook.append(productElement);
  
    
  }
}


class App {
  static cart;
  static init(){
    const shop = new Shop();
    shop.display();
    this.cart = shop.cart;
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

class ProductItem{
  constructor(prod){
    this.prod = prod; //object with prod details
  }

  addToCart(){
    App.addProductToCart(this.prod);
    //console.log('Adding product to cart...');
    //console.log(this.prod);
  }

  display(){ //to create li element with the given product details
    const productElement = document.createElement('li');
      productElement.className = 'product-item';
      productElement.innerHTML = 
        `
          <div>
            <img src="${this.prod.imageurl}" alt="${this.prod.name}">
            <div class="product-item__content">
              <h2>${this.prod.name}</h2>
              <h3>${this.prod.price}</h3>
              <button>Add to cart</button>
            </div>
          </div>
        `;

        //here onclick function using event listener
        //we can select dutton using getElementById --- id? ---- 
        //document/the element name.querySelector('button') //return the element with given type
        const addCartButton = productElement.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
      return productElement; //returning li element
  }
}

class ProductList{
    products = [p1,p2];
    constructor(){}

    display(){
      //const renderHook = document.getElementById('app'); //access to the div
      const prodList = document.createElement('ul');
      prodList.className='product-list';
      for(const x of this.products){ //p1 for first time//p2 - second time

        const productItem = new ProductItem(x);//create the element using different class
        const productElement = productItem.display(); //here you get li for each product
        prodList.append(productElement);

      }
      //renderHook.append(prodList); //adding to app id div -- Now doing in Shop class
      return prodList //return ul elemnt with product details
    }
}

//const productList = new ProductList();
//productList.display();

//const shop = new Shop(); // {}

//shop.display();

App.init();




