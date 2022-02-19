import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public dog$: Observable<Dog> | null = null;

  image$: Observable<any>;

  constructor(private dogService: DogService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getDogById(+this.route.snapshot.paramMap.get('id'));
  }
  getDogById(id: number): void {
    this.dog$ = this.dogService.getDog(id).pipe(tap((res) => {
        this.image$ = this.dogService.getDogImage(res.reference_image_id);
    }));
  }

  /* async getDodByBreed(breedId: number) {
    const BASE_API_URL = 'https://api.thedogapi.com/v1/';
    const [data] = await fetch(
      BASE_API_URL + '/images/search?include_breed=1&breed' + breedId
    ).then((data) => data.json);
    const {url: imageUrl, breeds} = data;
  }
*/

  // document.getElementById('imageRandom').setAttribute('src', imageUrl);
}
