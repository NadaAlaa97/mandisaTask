import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule, TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { id: 1, image: 'prod1.jpg', titleKey: 'ITEM1.TITLE', descKey: 'ITEM1.DESC' },
    { id: 2, image: 'prod2.webp', titleKey: 'ITEM2.TITLE', descKey: 'ITEM2.DESC' },
    { id: 3, image: 'prod3.webp', titleKey: 'ITEM3.TITLE', descKey: 'ITEM3.DESC' },
    { id: 4, image: 'prod4.jpg', titleKey: 'ITEM4.TITLE', descKey: 'ITEM4.DESC' },
    { id: 5, image: 'prod5.jpeg', titleKey: 'ITEM5.TITLE', descKey: 'ITEM5.DESC' },
    { id: 6, image: 'prod6.webp', titleKey: 'ITEM6.TITLE', descKey: 'ITEM6.DESC' }
  ];

  constructor() {}
}
