import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProductItemComponent } from './layout-product-item.component';

describe('LayoutProductItemComponent', () => {
  let component: LayoutProductItemComponent;
  let fixture: ComponentFixture<LayoutProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
