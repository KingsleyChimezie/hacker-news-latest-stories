import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentPath = '';
  hide = true;
  hidePathsArr = ['/angular'];

  // prime NG variables
  showSidebar;
  searchString
  checked: boolean = false;

  constructor(
    private location: Location,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {
    // check current path in array
    router.events.subscribe(() => {
      this.currentPath = location.path();
      this.hide = this.hidePathsArr.includes(this.currentPath);
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
