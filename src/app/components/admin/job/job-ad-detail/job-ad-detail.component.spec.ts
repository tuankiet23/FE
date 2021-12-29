import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdDetailComponent } from './job-ad-detail.component';

describe('JobAdDetailComponent', () => {
  let component: JobAdDetailComponent;
  let fixture: ComponentFixture<JobAdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
