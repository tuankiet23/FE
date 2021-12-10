import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdComponent } from './company-ad.component';

describe('CompanyAdComponent', () => {
  let component: CompanyAdComponent;
  let fixture: ComponentFixture<CompanyAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
