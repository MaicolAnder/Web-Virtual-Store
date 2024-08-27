import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  public product?: Product = new Product();

  constructor(
    private productsServices: ProductsService,
    private router: Router
  ) {
    this.product = this.getProduct()
    console.log(this.product)
  }

  getProduct(): Product | undefined {
    return this.productsServices.getProduct();
  }
}
