import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'app-hero-list',
  template:  `
                 <p>
                     hero-list works!
                 </p>
             `,
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  public constructor() {
  }

  public ngOnInit() {
  }
}
