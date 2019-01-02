import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-put',
  templateUrl: './animal-put.component.html',
  styleUrls: ['./animal-put.component.css']
})
export class AnimalPutComponent implements OnInit {

  private id
  private name;
  private age;
  private animalType;
  private breed;
  private createDate='MOMENT';
  private status;
  private description;
  private get_on_well_with_dogs;
  private get_on_well_with_cats
  private get_on_well_with_kids

  private sub

  public animalsLoading = true

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id

      this.animalService.getAnimalById(this.id)
        .then(animal => {
          this.name = animal.name
          this.age = animal.age
          this.animalType = animal.animalType
          this.breed = animal.breed
          this.createDate = animal.createDate
          this.status = animal.status
          this.description = animal.description
          this.get_on_well_with_dogs = animal.get_on_well_with_dogs
          this.get_on_well_with_cats = animal.get_on_well_with_cats
          this.get_on_well_with_kids = animal.get_on_well_with_kids
        })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit () {
    this.animalService.putAnimal({
      name : this.name,
      age: this.age ,
      animalType: this.animalType ,
      breed: this.breed ,
      createDate: this.createDate ,
      status: this.status ,
      description: this.description ,
      get_on_well_with_dogs: this.get_on_well_with_dogs ,
      get_on_well_with_cats: this.get_on_well_with_cats ,
      get_on_well_with_kids: this.get_on_well_with_kids ,
    }, this.id).then(()=>{
      console.log("PUT-PUT");
      this.router.navigate(['/animal'])
    })
  }


}
