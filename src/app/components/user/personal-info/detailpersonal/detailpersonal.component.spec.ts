import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpersonalComponent } from './detailpersonal.component';

describe('DetailpersonalComponent', () => {
  let component: DetailpersonalComponent;
  let fixture: ComponentFixture<DetailpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
