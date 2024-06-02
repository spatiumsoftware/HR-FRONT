import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofCompanyComponent } from './headof-company.component';

describe('HeadofCompanyComponent', () => {
  let component: HeadofCompanyComponent;
  let fixture: ComponentFixture<HeadofCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadofCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadofCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
