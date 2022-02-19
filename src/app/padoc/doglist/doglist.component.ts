import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css'],
})
export class DogListComponent implements OnInit {
  dogs: Dog[] = [];
  dog$: Observable<Dog> | null = null;

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    setTimeout(this.getDogs, 500);
    this.getDogs();
  }

  getDogs(): void {
    this.dogService
      .getDogs()
      .pipe(
        tap((response: Dog[]) => {
          console.log(response);
        }),
        map((response: Dog[]) => {
          console.log(response);
          const mapResponse = response.map((dog) => {
            return {
              ...dog,
              name: dog.name.toUpperCase(),
            };
          });
          return mapResponse;
        }),
        catchError((error) => {
          console.log('404 NOT FOUND');
          return of(EMPTY);
        })
      )
      .subscribe({
        next: (response: Dog[]) => {
          this.dogs = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.status);
        },
      });
  }

  getDogByID(id: number): void {
    this.dog$ = this.dogService.getDog(id);
  }
}
