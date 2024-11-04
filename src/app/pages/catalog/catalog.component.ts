import {Subject, Subscription} from "rxjs";

declare var $: any;

import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../shared/services/product.service";



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  private subscription: Subscription | null = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.productService.getProducts().subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
      },
      error: (error) => {
        this.loading = false;
        console.error('Ошибка при загрузке данных о товарах:', error);
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
