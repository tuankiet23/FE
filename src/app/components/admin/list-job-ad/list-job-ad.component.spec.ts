import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobAdComponent } from './list-job-ad.component';

describe('ListJobAdComponent', () => {
  let component: ListJobAdComponent;
  let fixture: ComponentFixture<ListJobAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
