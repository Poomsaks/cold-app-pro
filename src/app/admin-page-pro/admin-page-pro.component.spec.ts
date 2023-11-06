import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageProComponent } from './admin-page-pro.component';

describe('AdminPageProComponent', () => {
  let component: AdminPageProComponent;
  let fixture: ComponentFixture<AdminPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageProComponent]
    });
    fixture = TestBed.createComponent(AdminPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
