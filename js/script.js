let orange = document.querySelector('#orng');
let mango = document.querySelector('#mngo');
let strawberry = document.querySelector('#straw');
let grape = document.querySelector('#grape');

let productlist = document.querySelector('#product-list')

//class
class Shop {
    constructor(product,quantity,price) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}

//ui class
class UI{
    constructor(){

    }
    //orange
   static addToOCart(shop) {
        
        let list = document.querySelector('#product-list');
        let row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${shop.product}</td>
        <td>${shop.quantity}</td>
        <td>${shop.price}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);

    }
    //mango
   static addtoMcart(shop) {

        let list = document.querySelector('#product-list');
        let row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${shop.product}</td>
        <td>${shop.quantity}</td>
        <td>${shop.price}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);

    }
    //strawberry
    static addtoStraw(shop) {

        let list = document.querySelector('#product-list');
        let row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${shop.product}</td>
        <td>${shop.quantity}</td>
        <td>${shop.price}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);
    }

    //grape
    static addtoGrape(shop) {

        let list = document.querySelector('#product-list');
        let row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${shop.product}</td>
        <td>${shop.quantity}</td>
        <td>${shop.price}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);

    }
    

    //validation
   static showAlert(message,className) {
        clearAlert();
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        let conatiner = document.querySelector('.container');
        let validation = document.querySelector('#validation');

        conatiner.insertBefore(div, validation);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

        

        
    }

    //delete product
   static deletFromCart(target) {
        if(target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();

            Store.removeProduct(target.parentElement.previousElementSibling.textContent.trim());

            UI.showAlert('Product Removed from cart' , 'success');
        }
    }

   
}

// //local Storage

    class Store {
        static getProduct() {
            let products;
            if(localStorage.getItem('products') === null) {
                products = [];
            }else {
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        }

        static addProduct(shop) {
            let products = Store.getProduct();
            products.push(shop);

            localStorage.setItem('products', JSON.stringify(products));
        }
        static displayProduct() {
            let products = Store.getProduct();

            products.forEach(shop => {

                UI.addtoMcart(shop);
                
            });
        }
        //delet from ls
        static removeProduct(price) {
            let products = Store.getProduct();

            products.forEach((shop, index) => {
                if(shop.price === price) {
                    products.splice(index, 1);
                }
            });
            localStorage.setItem('products',JSON.stringify(products));
        }
    } 


//event listener
orange.addEventListener('click',addOrng);
mango.addEventListener('click',addMango);
strawberry.addEventListener('click',addStrawberry);
grape.addEventListener('click', addGrape);

productlist.addEventListener('click',removeProduct);
document.addEventListener('DOMContentLoaded', Store.displayProduct());



//define functions

//orrange funtion
function addOrng(e) {
    
    let product = "Orange",
    quantity = "2kg",
    price = "$10";


    if(product === 'Orange' || quantity === '2kg' || price === '$10') {

        let shop = new Shop(product,quantity,price);
        UI.addToOCart(shop);

        UI.showAlert("Orange Added To your Cart","success");
        Store.addProduct(shop);


    }else {

        UI.showAlert("Input set Code has error","error");

    }
    e.preventDefault();
    
}

//mango function
function addMango(e) {

    let product = "Mango",
    quantity = "2kg",
    price = "$12";


    if(product === 'Mango' || quantity === '2kg' || price === '$12') {
        // alert("Your code has error");
        let shop = new Shop(product,quantity,price);

        UI.addtoMcart(shop);
        UI.showAlert("Mango Added To your Cart","success");

        Store.addProduct(shop);

        
        

    }else{

        UI.showAlert("Input set Code has error","error");
        
    
    }

    
}

//strawberry function
function addStrawberry() {

    let product = "Strawberry",
    quantity = "2kg",
    price = "$7";

    
    if(product === 'Strawberry' || quantity === '2kg' || price === '$7') {
        // alert("Your code has error");
        let shop = new Shop(product,quantity,price);

        UI.addtoStraw(shop);
        UI.showAlert("Strawberry Added To your Cart","success");

        Store.addProduct(shop);

        
        

    }else{

        UI.showAlert("Input set Code has error","error");
        
    
    }

}

//grape function
function addGrape() {

    let product = "Grape",
    quantity = "2kg",
    price = "$5";

    
    if(product === 'Grape' || quantity === '2kg' || price === '$5') {
        // alert("Your code has error");
        let shop = new Shop(product,quantity,price);

        UI.addtoGrape(shop);
        UI.showAlert("Grape Added To your Cart","success");

        Store.addProduct(shop);

        
        

    }else{

        UI.showAlert("Input set Code has error","error");
        
    
    }

}


//remove function
function removeProduct(e) {
    
    UI.deletFromCart(e.target);
    

    e.preventDefault();
}

function  clearAlert() {
    let currentAlert = document.querySelector('.alert');//for reomove double alert
    if(currentAlert){
        currentAlert.remove();
    }
}