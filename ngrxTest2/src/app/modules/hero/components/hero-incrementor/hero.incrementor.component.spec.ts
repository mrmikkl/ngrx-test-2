import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero

.
Incrementor.ComponentComponent;
}
from;
'./hero.incrementor.component.component';

describe('Hero.Incrementor.ComponentComponent', () => {
  let component: Hero.Incrementor.ComponentComponent;
  let fixture: ComponentFixture<Hero.Incrementor.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Hero.Incrementor.ComponentComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero.Incrementor.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
