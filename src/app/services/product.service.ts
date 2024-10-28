declare var $: any;
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


interface Product {
  id: number,
  image: string,
  title: string,
  price: number,
  description: string;

}
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
