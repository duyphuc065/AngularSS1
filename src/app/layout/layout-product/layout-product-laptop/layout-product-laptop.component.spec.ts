import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProductLaptopComponent } from './layout-product-laptop.component';

describe('LayoutProductLaptopComponent', () => {
  let component: LayoutProductLaptopComponent;
  let fixture: ComponentFixture<LayoutProductLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProductLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProductLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
