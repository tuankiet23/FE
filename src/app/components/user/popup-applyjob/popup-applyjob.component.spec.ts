import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupApplyjobComponent } from './popup-applyjob.component';

describe('PopupApplyjobComponent', () => {
  let component: PopupApplyjobComponent;
  let fixture: ComponentFixture<PopupApplyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupApplyjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupApplyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
