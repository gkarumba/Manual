import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccoManagementComponent } from './sacco-management.component';

describe('SaccoManagementComponent', () => {
  let component: SaccoManagementComponent;
  let fixture: ComponentFixture<SaccoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaccoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
