import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterJobComponent } from './creater-job.component';

describe('CreaterJobComponent', () => {
  let component: CreaterJobComponent;
  let fixture: ComponentFixture<CreaterJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
