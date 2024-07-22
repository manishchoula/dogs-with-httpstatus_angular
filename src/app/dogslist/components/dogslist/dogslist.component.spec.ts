import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogslistComponent } from './dogslist.component';

describe('DogslistComponent', () => {
  let component: DogslistComponent;
  let fixture: ComponentFixture<DogslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
