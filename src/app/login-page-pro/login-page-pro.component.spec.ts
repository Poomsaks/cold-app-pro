import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageProComponent } from './login-page-pro.component';

describe('LoginPageProComponent', () => {
  let component: LoginPageProComponent;
  let fixture: ComponentFixture<LoginPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageProComponent]
    });
    fixture = TestBed.createComponent(LoginPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
