declare var $: any;
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

interface Product {
  id: number,
  image: string,
  title: string,
  price: number,
  description: string;

}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private cartService: CartService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  // buyProduct(product: Product) {
  //   this.router.navigate(['/order'], { queryParams: { productName: this.product.title } });
  //
  // }

  addToCart(title: string): void {
    this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams: {product: title}});
  }

}
