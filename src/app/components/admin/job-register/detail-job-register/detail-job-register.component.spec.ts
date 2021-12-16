import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobRegisterComponent } from './detail-job-register.component';

describe('DetailJobRegisterComponent', () => {
  let component: DetailJobRegisterComponent;
  let fixture: ComponentFixture<DetailJobRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJobRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
