import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from 'src/note';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  notes = NOTES;
  constructor() {}
  show(title: string) {
    alert(title);
  }
}
