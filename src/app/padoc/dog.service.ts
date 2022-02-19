import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog.model';

@Injectable()
export class DogService {
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`https://api.thedogapi.com/v1/breeds`);
  }

  getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(`https://api.thedogapi.com/v1/breeds/${id}`);
  }

  getDogImage(imageId: string): Observable<Dog> {
    return this.http.get<Dog>(`https://api.thedogapi.com/v1/images/${imageId}`);
  }

  getDogTemperament(temperament: string) {
    return this.http.get<Dog>(
      `https://api.thedogapi.com/v1/breeds/${temperament}`
    );
  }
  getDogOrigin(origin: string) {
    return this.http.get<Dog>(`https://api.thedogapi.com/v1/breeds/${origin}`);
  }


  asd = "https://api.thedogapi.com/v1/images/search?include_breed=1&breed/${URL}";



  
  //getDogImage(id) {
  // document
  //   .getElementById('imagine')
  //   .setAttribute('src', `https://api.thedogapi.com/v1/images/${id}`);
  // }
  //document.getElementById('imageRandom').setAttribute('src', imageUrl);
  //    `https://dog.ceo/api/breed/${breedName}/images`
}
