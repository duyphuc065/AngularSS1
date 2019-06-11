import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutCarouselComponent } from './layout-carousel/layout-carousel.component';
import { LayoutProductComponent } from './layout-product/layout-product.component';
import { LayoutPromotionComponent } from './layout-promotion/layout-promotion.component';
import { LayoutProductPhoneComponent } from './layout-product/layout-product-phone/layout-product-phone.component';
import { LayoutProductLaptopComponent } from './layout-product/layout-product-laptop/layout-product-laptop.component';
import { LayoutProductItemComponent } from './layout-product/layout-product-item/layout-product-item.component';
import { LayoutPromotionItemComponent } from './layout-promotion/layout-promotion-item/layout-promotion-item.component';

@NgModule({
  declarations: [LayoutHeaderComponent, LayoutCarouselComponent, LayoutProductComponent, LayoutPromotionComponent, LayoutProductPhoneComponent, LayoutProductLaptopComponent, LayoutProductItemComponent, LayoutPromotionItemComponent],
  exports:[LayoutHeaderComponent, LayoutCarouselComponent, LayoutProductComponent, LayoutPromotionComponent, LayoutProductPhoneComponent, LayoutProductLaptopComponent, LayoutProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
