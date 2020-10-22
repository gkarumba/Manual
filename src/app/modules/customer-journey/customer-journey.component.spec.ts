import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerJourneyComponent } from './customer-journey.component';

describe('CustomerJourneyComponent', () => {
  let component: CustomerJourneyComponent;
  let fixture: ComponentFixture<CustomerJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
