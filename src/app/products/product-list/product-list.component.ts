import { Component, OnInit } from '@angular/core';
import { MockProductService } from '../mock-product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: MockProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
