import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPromotionItemComponent } from './layout-promotion-item.component';

describe('LayoutPromotionItemComponent', () => {
  let component: LayoutPromotionItemComponent;
  let fixture: ComponentFixture<LayoutPromotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPromotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPromotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
