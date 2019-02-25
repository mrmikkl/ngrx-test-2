import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'app-hero-list',
  template:  `
                 <div class="container content">
                     <div class="row">
                         <div class="col">
                             <h1>HERO LIST</h1>
                         </div>
                     </div>
                     <div class="row">
                         <app-hero-incrementor></app-hero-incrementor>
                     </div>
                 </div>
             `,
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  public constructor() {
  }

  public ngOnInit() {
  }
}
