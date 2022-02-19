import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './padoc/todo/todo.component';
import { DogListComponent } from './padoc/doglist/doglist.component';
import { HomeComponent } from './padoc/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doglist', component: DogListComponent },
  { path: 'todo/:id', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
