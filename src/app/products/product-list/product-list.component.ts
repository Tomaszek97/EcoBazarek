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
selectedTypes: string[] = [];
  displayedProducts: Product[] | undefined;

  constructor(private productService: MockProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.displayedProducts = [...this.products];
  }
  onTypeChange(event: any, type: string) {
    if (event.target.checked) {
      this.selectedTypes.push(type);
    } else {
      const index = this.selectedTypes.indexOf(type);
      if (index > -1) {
        this.selectedTypes.splice(index, 1);
      }
    }
    this.filterProducts();
  }

  filterProducts() {
    this.displayedProducts = this.products.filter(product => this.selectedTypes.includes(product.type));
  }
  
}
