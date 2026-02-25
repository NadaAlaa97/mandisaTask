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
      name: 'Sarah Johnson',
      rating: 5,
      text: 'This product has completely transformed my skin!',
      verified: true
    },
    {
      id: 2,
      name: 'Emily Chen',
      rating: 5,
      text: 'I\'ve never felt more confident in my own skin.',
      verified: true
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      rating: 4,
      text: 'The natural ingredients make all the difference.',
      verified: false
    }
  ];

  constructor() {}
}
