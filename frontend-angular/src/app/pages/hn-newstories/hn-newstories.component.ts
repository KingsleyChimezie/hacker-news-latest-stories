import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-hn-newstories',
  templateUrl: './hn-newstories.component.html',
  styleUrls: ['./hn-newstories.component.scss']
})
export class HnNewstoriesComponent implements OnInit {

  // prime NG variables
  showSidebar;
  searchString
  checked: boolean = false;

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
