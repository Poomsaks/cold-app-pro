import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsPageProComponent } from './contact-us-page-pro.component';

describe('ContactUsPageProComponent', () => {
  let component: ContactUsPageProComponent;
  let fixture: ComponentFixture<ContactUsPageProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsPageProComponent]
    });
    fixture = TestBed.createComponent(ContactUsPageProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
