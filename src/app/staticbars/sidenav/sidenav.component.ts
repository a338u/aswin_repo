import { MatListModule } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MegaMenuModule,
    MatIconModule,
    MatListModule,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    MatToolbar,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  items = [
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'About', route: '/about', icon: 'info' },
    { label: 'Location', route: '/location', icon: 'place' },
    { label: 'Contact', route: '/contact', icon: 'email' },
    // Add more menu items as needed
  ];

  toggleMenu() {
    this.sidenav.toggle();
  }

  closeMenu() {
    this.sidenav.close();
  }

}
