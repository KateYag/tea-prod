import {Subject} from "rxjs";

declare var $: any;

import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";


interface Product {
  id: number,
  image: string,
  title: string,
  price: number,
  description: string;
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (data) => {
        this.loading = false;
        this.products = data;
      },
      (error) => {
        this.loading = false;
        console.error('Ошибка при загрузке данных о товарах:', error);
      }
    );
  }

}
