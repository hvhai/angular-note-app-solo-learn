import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from 'src/add-note/add-note.component';
import { NoteListComponent } from 'src/note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'new', component: AddNoteComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
