declare var $: any;
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
interface OrderResponse {
  success: number;
  message?: string;
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  submissionError: boolean = false;
  successMessage: boolean = false;
  isFormVisible: boolean = true;
  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
    last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^(?:\+?\d{1,1})?\d{11}$/)]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.maxLength(6)]],
    product: [{ value: 'Товар' }],
    address: ['', [Validators.required, Validators.pattern( /^[a-zA-Zа-яА-Я0-9\s\-\/]*$/)]],
    comment: ['']
  })



  onSubmit(): void {
    if (this.orderForm.valid) {
      this.http.post<OrderResponse>('https://testologia.ru/order-tea', this.orderForm.value).subscribe(response => {
        if (response.success === 1) {
          this.successMessage = true;
          this.isFormVisible = false;
        } else {
          this.submissionError = true;
        }
      },
        error => {
          console.error('Ошибка при отправке запроса:', error);
          this.submissionError = true;
        }
    );
    }
  }



    public product = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  };
  constructor(private cartService: CartService,
              private fb: FormBuilder,
              private http: HttpClient,
              private activatedRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    // if (this.cartService.product) {
    //   this.product.title = this.cartService.product;
    // }

    const productParam = this.activatedRouter.snapshot.queryParamMap.get('product');
    if (productParam) {
      this.product.title = productParam;
    }

    // this.activatedRouter.queryParams.subscribe((params) => {
    //   if (params['product']) {
    //     this.product.title = params['product'];
    //   }
    // });
  }

}
