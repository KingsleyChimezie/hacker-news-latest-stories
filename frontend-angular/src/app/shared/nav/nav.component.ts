import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentPath = '';
  hide = true;
  hidePathsArr = ['/angular'];

  constructor(
    private location: Location,
    private router: Router
  ) {
    // check current path in array
    router.events.subscribe(() => {
      this.currentPath = location.path();
      this.hide = this.hidePathsArr.includes(this.currentPath);
    });
  }

  ngOnInit(): void {
  }

}
