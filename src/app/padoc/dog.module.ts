import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './doglist/doglist.component';
import { HttpClientModule } from '@angular/common/http';
import { DogService } from './dog.service';
import { AppRoutingModule } from '../app.routing.module';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  declarations: [DogListComponent, TodoComponent, HomeComponent],
  exports: [DogListComponent],
  providers: [DogService],
})
export class DogsModule {}
