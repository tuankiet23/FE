import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademiclevelComponent } from './edit-academiclevel.component';

describe('EditAcademiclevelComponent', () => {
  let component: EditAcademiclevelComponent;
  let fixture: ComponentFixture<EditAcademiclevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcademiclevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademiclevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
