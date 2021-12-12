import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobregisterComponent } from './list-jobregister.component';

describe('ListJobregisterComponent', () => {
  let component: ListJobregisterComponent;
  let fixture: ComponentFixture<ListJobregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
