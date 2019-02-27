import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store';
import { selectHeroCounterState, selectHeroCounterValue } from '../../../../store/hero-counter';

@Component({
  selector:  'app-hero-incrementor',
  template:  `
                 <div class="container-fluid">
                     <div class="row">
                         <div class="col">
                             <input [(ngModel)]="value"
                                    type="text"
                                    class="form-control" />
                         </div>
                     </div>
                     <div class="row justify-content-start">
                         <div class="col">
                             <div class="d-flex justify-content-between my-2">
                                 <div>
                                     <button (click)="decrement()"
                                             class="btn btn-primary mr-1"
                                             type="button"><i class="fas fa-minus"></i></button>
                                     <button (click)="increment()"
                                             class="btn btn-primary"
                                             type="button"><i class="fas fa-plus"></i></button>
                                 </div>
                                 <div>
                                     <button (click)="decrement()"
                                             class="btn btn-primary mr-1"
                                             type="button">OMA
                                     </button>
                                     <button (click)="increment()"
                                             class="btn btn-primary"
                                             type="button">SCARLETT JOHANSSON
                                     </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             `,
  styleUrls: ['./hero-incrementor.component.scss']
})
export class HeroIncrementorComponent implements OnInit {
  value;

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.select(selectHeroCounterState).subscribe(bla => console.log(bla));
    this.store$.select(selectHeroCounterValue).subscribe(bla => console.log(bla));
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
