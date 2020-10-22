import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBankingComponent } from './core-banking.component';

describe('CoreBankingComponent', () => {
  let component: CoreBankingComponent;
  let fixture: ComponentFixture<CoreBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
