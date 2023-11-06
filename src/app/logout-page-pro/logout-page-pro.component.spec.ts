import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPageProComponent } from './logout-page-pro.component';

describe('LogoutPageProComponent', () => {
  let component: LogoutPageProComponent;
  let fixture: ComponentFixture<LogoutPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutPageProComponent]
    });
    fixture = TestBed.createComponent(LogoutPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
