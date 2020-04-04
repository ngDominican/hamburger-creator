import { Component, OnInit } from '@angular/core';
import { Hamburger } from 'src/app/shared/models/hamburger.model';
import { HamburgerService } from '../../creator/hamburger.service';
import { Observable } from 'rxjs';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styles: []
})
export class OrdersListComponent implements OnInit {

  public burgerQuantity = 0;
  burgers$: Observable<Hamburger[]>;

  constructor(
    private hamburgerService: HamburgerService,
    private analytics: AngularFireAnalytics
  ) {}

  ngOnInit() {
    this.burgers$ = this.hamburgerService.hamburgers$;
    this.burgers$.subscribe(result => this.burgerQuantity = result.length);
    this.analytics.logEvent('hamburgers_obtained', { quantity: this.burgerQuantity, module: 'order' });
  }

}
