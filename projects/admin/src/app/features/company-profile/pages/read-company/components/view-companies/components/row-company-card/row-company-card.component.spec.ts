import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCompanyCardComponent } from './row-company-card.component';

describe('RowCompanyCardComponent', () => {
  let component: RowCompanyCardComponent;
  let fixture: ComponentFixture<RowCompanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowCompanyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
