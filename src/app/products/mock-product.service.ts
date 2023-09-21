import { Injectable } from '@angular/core';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private products: Product[] = [
    {
      id: 'CEREALS',
      name: 'Jęczmień eko',
      desc: 'Bogaty w błonnik, witaminy i minerały.',
      price: 0,
      type: 'CEREALS',
      category: 'BARLEY',
      unit: 't',
      createdBy: '4cf938da-51cc-41c6-b7b1-763433bbce83',
      createDate: 1690093259833,
    },
    {
      id: 'FRUITS',
      name: 'Jabłka',
      desc: 'Soczyste i chrupiące jabłka z ekologicznych upraw.',
      price: 5,
      type: 'FRUITS',
      category: 'APPLE',
      unit: 'kg',
      createdBy: 'system',
      createDate: 1690093259831,
    },
    {
      id: 'MEAT',
      name: 'Wołowina',
      desc: 'Mięso wołowe najwyższej jakości.',
      price: 30,
      type: 'BEEF',
      category: 'BEEF',
      unit: 'kg',
      createdBy: 'system',
      createDate: 1690093259832,
    },
    {
      id: 'FRUITS',
      name: 'Borówki',
      desc: 'Świeże borówki, idealne do deserów.',
      price: 15,
      type: 'FRUITS',
      category: 'BLUEBEERY',
      unit: 'kg',
      createdBy: 'system',
      createDate: 1690093259833,
    },
    {
      id: 'VEGETABLE',
      name: 'Brokuły',
      desc: 'Zielone brokuły, pełne witamin.',
      price: 8,
      type: 'VEGETABLE',
      category: 'BROCCOLI',
      unit: 'kg',
      createdBy: 'system',
      createDate: 1690093259834,
    },
    {
      id: 'DAIRY',
      name: 'Mleko',
      desc: 'Naturalne mleko prosto od krowy.',
      price: 3,
      type: 'DAIRY',
      category: 'MILK',
      unit: 'l',
      createdBy: 'system',
      createDate: 1690093259835,
    },
    {
      id: 'MEAT',
      name: 'Wieprzowina',
      desc: 'Mięso wieprzowe, doskonałe na kotlecie.',
      price: 25,
      type: 'MEAT',
      category: 'PORK',
      unit: 'kg',
      createdBy: 'system',
      createDate: 1690093259836,
    },
    {
      id: 'MEAT',
      name: 'Stek',
      desc: 'Stek grillowy, idealny na weekendowy obiad.',
      price: 40,
      type: 'BEEF',
      category: 'STEAK',
      unit: 'piece',
      createdBy: 'system',
      createDate: 1690093259837,
    },
    {
      id: 'DAIRY',
      name: 'Jogurt',
      desc: 'Jogurt naturalny, bez dodatków.',
      price: 2,
      type: 'DAIRY',
      category: 'YOGURT',
      unit: 'l',
      createdBy: 'system',
      createDate: 1690093259838,
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
