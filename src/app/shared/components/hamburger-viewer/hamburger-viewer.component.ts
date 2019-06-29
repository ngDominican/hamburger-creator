import { Component, OnInit, Input } from '@angular/core';
import { Hamburger } from '../../models/hamburger.model';

@Component({
  selector: 'app-hamburger-viewer',
  templateUrl: './hamburger-viewer.component.html',
  styles: []
})
export class HamburgerViewerComponent implements OnInit {

  @Input() hamburger: Hamburger;

  constructor() { }

  ngOnInit() {
  }

}
