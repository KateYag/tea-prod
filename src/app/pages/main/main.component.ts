declare var $: any;
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  popupVisible = false;
  private subscription: Subscription | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subscription = timer(10000).subscribe(() => {
      this.popupVisible = true;
    });
  }

  ngAfterViewInit(): void {
    this.initializeAccordion();
  }

  initializeAccordion(): void {
    $('#accordion').accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  goToCatalog(): void {
    this.popupVisible = false;
    this.router.navigate(['/catalog']);
  }

}
