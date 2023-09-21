import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const productRoutes: Routes = [{ path: '', component: ProductListComponent }];

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, RouterModule.forChild(productRoutes)],
})
export class ProductsModule {}
