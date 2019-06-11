import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProductPhoneComponent } from './layout-product-phone.component';

describe('LayoutProductPhoneComponent', () => {
  let component: LayoutProductPhoneComponent;
  let fixture: ComponentFixture<LayoutProductPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProductPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProductPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
