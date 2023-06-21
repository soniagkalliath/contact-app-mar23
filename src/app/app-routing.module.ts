import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //all-contacts- path: http://localhost:4200/
  {
    path:"", component:AllContactsComponent
  },
  //add-contact - path: http://localhost:4200/add-contact
  {
    path:"add-contact" , component:AddContactComponent
  },
  //edit-contact - path: http://localhost:4200/edit-contact/10
  {
    path:"edit-contact/:id", component:EditContactComponent
  },
  //view-contact - path: http://localhost:4200/view-contact/10
  {
    path:"view-contact/:id", component:ViewContactComponent
  },
  //page-not-found: at end of path setting
  {
    path:"**", component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
