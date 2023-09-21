import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { NoteListComponent } from 'src/note-list/note-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/home/home.component';
import { ContactComponent } from 'src/contact/contact.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    NoteListComponent,
    HomeComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
