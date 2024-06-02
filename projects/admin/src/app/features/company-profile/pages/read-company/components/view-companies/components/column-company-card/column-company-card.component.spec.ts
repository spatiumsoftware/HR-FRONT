import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnCompanyCardComponent } from './column-company-card.component';

describe('ColumnCompanyCardComponent', () => {
  let component: ColumnCompanyCardComponent;
  let fixture: ComponentFixture<ColumnCompanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnCompanyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
