import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-newsletter',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  email: string = '';

  constructor() {}

  subscribe() {
    if (this.email) {
      console.log('Subscribing with email:', this.email);
      this.email = '';
    }
  }
}
