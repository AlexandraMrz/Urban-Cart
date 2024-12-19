import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {question: 'What is your return policy?', answer: 'You can returrn products within 30 days.'},
    {question: 'Do you offer free shipping?', answer: 'Yes, we offer free shipping on orders over $500.'},
    {question: 'How can I track my order?', answer: 'You can track your order from your account dashboard using the AWB.'},
    {question: 'Can I cancel my order?', answer: 'Orders can be cancelled within 2 hours of placing them.'},
  ];
}
