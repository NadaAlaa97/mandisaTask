import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      nameKey: 'TESTIMONIALS.CUSTOMER1.NAME',
      textKey: 'TESTIMONIALS.CUSTOMER1.TEXT',
      rating: 5,
      verified: true
    },
    {
      id: 2,
      nameKey: 'TESTIMONIALS.CUSTOMER2.NAME',
      textKey: 'TESTIMONIALS.CUSTOMER2.TEXT',
      rating: 5,
      verified: true
    },
    {
      id: 3,
      nameKey: 'TESTIMONIALS.CUSTOMER3.NAME',
      textKey: 'TESTIMONIALS.CUSTOMER3.TEXT',
      rating: 4,
      verified: false
    }
  ];

  constructor() {}
}
