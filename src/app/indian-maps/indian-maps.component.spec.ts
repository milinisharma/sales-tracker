import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianMapsComponent } from './indian-maps.component';

describe('IndianMapsComponent', () => {
  let component: IndianMapsComponent;
  let fixture: ComponentFixture<IndianMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
