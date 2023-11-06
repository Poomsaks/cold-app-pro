import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeProComponent } from './page-home-pro.component';

describe('PageHomeProComponent', () => {
  let component: PageHomeProComponent;
  let fixture: ComponentFixture<PageHomeProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHomeProComponent]
    });
    fixture = TestBed.createComponent(PageHomeProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
