import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public productsList: Array<Product> = [];
  
  constructor(
    private productsServices: ProductsService,
    private router: Router
  ){}

  ngOnInit(){
    console.log('Hola mundo')
    this.getAllProducts()
  }

  private getAllProducts() {
    this.productsServices.getProducts().subscribe(
      (response: Array<Product>) => {
        this.productsList = response;
        console.log(this.productsList)
    });
  }

  public gotoProductDetail(product: Product ){
    this.router.navigate(['/detail', product])
  }
  // this.router.navigate(['/heroes']);

}
