import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  carouselItems = [
    {
      image:
        'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?cs=srgb&dl=pexels-pixabay-236380.jpg&fm=jpg',
      caption: 'Caption 3',
    },
    {
      image:
        'https://st2.depositphotos.com/1051355/6215/i/450/depositphotos_62158825-stock-photo-doctor-with-stethoscope-in-a.jpg',
      caption: 'Caption 2',
    },
    {
      image:
        'https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg',
      caption: 'Caption 3',
    },
  ];
}
