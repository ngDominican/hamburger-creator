import { Component, OnInit } from '@angular/core';
import { Hamburger } from 'src/app/shared/models/hamburger.model';
import { HamburgerService } from '../../creator/hamburger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styles: []
})
export class OrdersListComponent implements OnInit {

  burgers$: Observable<Hamburger[]>;

  constructor(
    private hamburgerService: HamburgerService
  ) {}

  ngOnInit() {
    this.burgers$ = this.hamburgerService.hamburgers$;
  }

}
