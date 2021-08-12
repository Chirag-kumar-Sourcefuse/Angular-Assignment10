import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadDataComponent } from './read-data/read-data.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    component:ReadDataComponent,
    path:'routes-users'
  },
  {
    component:EditUserComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
