import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-angular';

  constructor(private router: Router) { }

  ngOnInit() {
    // Route Error 404
    this.router.errorHandler = (error: any) => {
      const routerError = error.toString();
      if (routerError.indexOf('Cannot match any routes') >= 0) {
        this.router.navigate(['/404']);
      } else {
        throw error;
      }
    };
  }
}
