import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 style="color:red;display:flex;flex-direction:row;justify-content:center;align-items:center;width:95vw;height:90vh;">
      page-not-found works!
    </h1>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
