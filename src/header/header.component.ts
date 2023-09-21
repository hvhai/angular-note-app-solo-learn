import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a href="" routerLink="/home">Home</a>&nbsp;
      <a href="" routerLink="/contact">Contacts</a>
    </nav>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'My Notes';
}
