import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products/products.service';
import { Router, RouterLink } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public title: string = "Tienda";
  public productsList: Array<Product> = [];
  public product: Product | undefined;
  
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
    this.productsServices.setProduct(product);
    this.router.navigate(['detail/'+product.id])
  }
}
