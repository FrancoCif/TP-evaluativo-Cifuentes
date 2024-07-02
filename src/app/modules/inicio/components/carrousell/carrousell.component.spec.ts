import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousellComponent } from './carrousell.component';

describe('CarrousellComponent', () => {
  let component: CarrousellComponent;
  let fixture: ComponentFixture<CarrousellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrousellComponent]
    });
    fixture = TestBed.createComponent(CarrousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
