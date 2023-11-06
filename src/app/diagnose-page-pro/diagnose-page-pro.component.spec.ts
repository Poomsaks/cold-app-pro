import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosePageProComponent } from './diagnose-page-pro.component';

describe('DiagnosePageProComponent', () => {
  let component: DiagnosePageProComponent;
  let fixture: ComponentFixture<DiagnosePageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosePageProComponent]
    });
    fixture = TestBed.createComponent(DiagnosePageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
