import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageProComponent } from './about-page-pro.component';

describe('AboutPageProComponent', () => {
  let component: AboutPageProComponent;
  let fixture: ComponentFixture<AboutPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageProComponent]
    });
    fixture = TestBed.createComponent(AboutPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
