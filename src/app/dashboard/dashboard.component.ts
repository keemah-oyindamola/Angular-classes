import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public http : HttpClient){}
  public products:any;
  public cart:any = []
  public displayCart:any = null
  public isCartVisible: boolean = false;  // Tracks the visibility of the cart
  // public addedTocart:any
  public message:string = ""

  ngOnInit(){
    this.http.get("http://localhost/phpclass/angdashboard.php",{
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    .subscribe((response:any)=>{
      console.log(response);
      this.products = response.map((product: any) => ({
        ...product,
        addedTocart: false  // Initialize addedToCart as false for each product
      }));
    })
  }

  addToCart(product:any){
    // const existingItem = this.cart.find((item: any) => item.product_name === product.product_name);
    
    // if (existingItem) {
    //   existingItem.quantity += product.quantity || 1; // Update quantity if item exists
    // } else {
      this.cart.push({
        product_name: product.product_name,
        product_price: product.product_price,
        product_img: product.product_img,
        quantity: product.quantity || 1 // Use the selected quantity or default to 1
      });
    // }
    console.log(this.cart);
    alert(`${product.product_name} added to cart!`)
    product.addedTocart = true
    this.updateCart(product)
  }

  updateCart(item: any, remove: boolean = false) {
    this.http.post("http://localhost/phpclass/updateCart.php", {
      product_name: item.product_name,
      quantity: item.quantity,
      product_img: item.product_img,
      remove: remove
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).subscribe(
      (response: any) => {
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        console.log(error);
        this.message = 'Error occurred while updating the cart.';
      }
    );
  }
  

  toggleCartVisibility() {
    this.isCartVisible = !this.isCartVisible;  // Toggle the cart visibility
  }

  increaseQty(item:any){
    item.quantity += 1
    console.log(item);
    this.updateCart(item)
    
  }

  decreaseQty(item:any){
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateCart(item);
    }
  }


  deleteItem(item:any){
    this.cart = this.cart.filter((cartItem :any)=> cartItem != this.cart)
    this.updateCart(item, )
  }
}
