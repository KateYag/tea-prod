import {Product} from "../../../models/product.model";


declare var $: any;
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://testologia.ru/tea?id=${id}`);
  }

}
