import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admindashbd',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './admindashbd.component.html',
  styleUrl: './admindashbd.component.css'
})
export class AdmindashbdComponent {
  constructor(public http: HttpClient) {}
  
  productsList: any[] = []; // For storing list of products
  products: any = {
    product_name: "",
    product_price: "",
    product_category: "",
    product_description: "",
    in_stock: "",
    profile: null
  };
  message: string = '';

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.products.profile = file;
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('product_name', this.products.product_name);
    formData.append('product_price', this.products.product_price);
    formData.append('product_category', this.products.product_category);
    formData.append('product_description', this.products.product_description);
    formData.append('in_stock', this.products.in_stock);
    
    if (this.products.profile) {
      formData.append('profile', this.products.profile);
    }

    this.http.post("http://localhost/phpclass/admin/createProduct.php", formData)
      .subscribe((response: any) => {
        console.log(response);
        if (response && response.success) {
          this.message = response.message;
          this.productsList.push({ ...this.products, profile: this.products.profile.name });
          this.products = { 
            product_name: "",
            product_price: "",
            product_category: "",
            product_description: "",
            in_stock: "",
            profile: null
          };
        } else {
          this.message = 'Unexpected response from server.';
        }
      }, (error) => {
        console.log(error);
        this.message = 'Error occurred during product creation.';
      });
  }
}
