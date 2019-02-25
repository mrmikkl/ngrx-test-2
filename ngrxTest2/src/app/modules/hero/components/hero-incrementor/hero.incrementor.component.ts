import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'app-hero-incrementor',
  template:  `
                 <div class="container-fluid">
                     <div class="row">
                         <div class="col-8">
                             <input [(ngModel)]="value"
                                    type="text"
                                    class="form-control" />
                         </div>
                         <div class="col-2">
                             <button (click)="decrement()"
                                     class="btn btn-primary"
                                     type="button"><i class="fas fa-minus"></i></button>
                         </div>
                         <div class="col-2">
                             <button (click)="increment()"
                                     class="btn btn-primary"
                                     type="button"><i class="fas fa-plus"></i></button>
                         </div>
                     </div>
                 </div>
             `,
  styleUrls: ['./hero.incrementor.component.scss']
})
export class HeroIncrementorComponent implements OnInit {
  // TODO put in store
  value = 0;

  constructor() {
  }

  ngOnInit() {
  }

  increment(): void {
    // TODO dispatch increment action
    this.value += 1;
  }

  // TODO dispatch decrement action
  decrement(): void {
    this.value -= 1;
  }
}
