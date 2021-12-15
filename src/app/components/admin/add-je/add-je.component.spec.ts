import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJEComponent } from './add-je.component';

describe('AddJEComponent', () => {
  let component: AddJEComponent;
  let fixture: ComponentFixture<AddJEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
