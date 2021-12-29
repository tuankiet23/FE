import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/components/user/popup-applyjob/form-contact/form-contact.component.spec.ts
import { FormContactComponent } from './form-contact.component';

describe('FormContactComponent', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactComponent ]
========
import { Login2Component } from './login2.component';

describe('Login2Component', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login2Component ]
>>>>>>>> main:src/app/components/authen/login2/login2.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/components/user/popup-applyjob/form-contact/form-contact.component.spec.ts
    fixture = TestBed.createComponent(FormContactComponent);
========
    fixture = TestBed.createComponent(Login2Component);
>>>>>>>> main:src/app/components/authen/login2/login2.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
