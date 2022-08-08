import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
