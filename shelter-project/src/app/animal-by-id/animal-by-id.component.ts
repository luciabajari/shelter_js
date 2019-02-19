import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-by-id',
  templateUrl: './animal-by-id.component.html',
  styleUrls: ['./animal-by-id.component.css']
})
export class AnimalByIdComponent implements OnInit, OnDestroy {


  private animal
  private id
  private sub
  public animalsLoading = true

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id
      

      this.animalService.getAnimalById(this.id)
        .then(animal => {
          this.animalsLoading = false
          this.animal = animal
          console.log(this.animal)
      }) 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
