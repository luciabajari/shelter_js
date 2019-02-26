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
  private getOnWellWithDOGS;
  private getOnWellWithCATS
  private getOnWellWithKIDS

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
          this.animalType = animal.animal_type
          this.breed = animal.breed
          this.createDate = animal.createDate
          this.status = animal.status
          this.description = animal.description
          this.getOnWellWithDOGS = animal.get_on_well_with_dogs
          this.getOnWellWithCATS = animal.get_on_well_with_cats
          this.getOnWellWithKIDS = animal.get_on_well_with_kids
          console.log("PUT-PUT", this.getOnWellWithDOGS);
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
      get_on_well_with_dogs: this.getOnWellWithDOGS ,
      get_on_well_with_cats: this.getOnWellWithCATS ,
      get_on_well_with_kids: this.getOnWellWithKIDS ,
    }, this.id).then(()=>{
      
     
      this.router.navigate(['/animal'])
      //console.log("PUT-PUT", this.getOnWellWithDOGS);
    })
  }


}
