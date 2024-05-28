import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatCardModule],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contacts = [
    { name: 'John Doe', position: 'Developer', email: 'john@example.com', phone: '123-456-7890', image: 'path/to/image1.jpg' },
    { name: 'Jane Smith', position: 'Designer', email: 'jane@example.com', phone: '987-654-3210', image: 'path/to/image2.jpg' },
    { name: 'John Doe', position: 'Developer', email: 'john@example.com', phone: '123-456-7890', image: 'path/to/image1.jpg' },
    { name: 'Jane Smith', position: 'Designer', email: 'jane@example.com', phone: '987-654-3210', image: 'path/to/image2.jpg' },
  ];

  openDetails(contact: any) {
  }

}
