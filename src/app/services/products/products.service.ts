import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cartUpdated$: Subject<boolean> = new Subject();
  public BASE_API = environment.api_base_url;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    // return this.http.get<any[]>( this.BASE_API + '/products');
    return this.http.get<any[]>('assets/test/products.json');
  }
}
