import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cartUpdated$: Subject<boolean> = new Subject();
  public BASE_API = environment.api_base_url;
  public data = signal('');

  constructor(private http: HttpClient) { }

  /**
   * load list of products from services
   * @returns Observable
   */
  getProducts(): Observable<any[]> {
    // return this.http.get<any[]>( this.BASE_API + '/products');
    return this.http.get<Array<Product>>('assets/test/products.json');
  }

  /**
   * set Product on sessionStorage as selectedProduct
   * @param product
   */
  setProduct(product: Product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  /**
   * get Product as selectedProduct from sessionStorage
   * @returns Product | null
   */
  getProduct(): Product | undefined {
    let result = localStorage.getItem('selectedProduct');
    if(result){
      return JSON.parse(result);
    }
    return undefined
  }
}
