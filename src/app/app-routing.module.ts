import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home.component';

const routes: Routes = [
    { path: '', title: 'Home Page', component: HomeComponent },
    { path: 'home', title: 'Home Page', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
