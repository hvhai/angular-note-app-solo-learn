import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from 'src/note';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  notes = NOTES;
  router = inject(Router);

  addNote(){
    this.router.navigateByUrl("/new")
  }

  show(title: string) {
    alert(title);
  }

  constructor() {}

}
