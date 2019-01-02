import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  public isAdmin=true
  private dogs
  public dogsLoading = true

  private animal
  id=null

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private auth:AuthService
  ) { }

  
  

  ngOnInit() {
    this.loadAnimals()
    //  this.isAdmin=this.auth.user.role=="ROLE_ADMIN";
  }
  loadAnimals () {
    this.dogsLoading=true;
    this.animalService.getDogs()
    .then(dogs=>{
      this.dogsLoading=false;
      this.dogs=dogs;
    })
  }
  getAnimalByID(id:number){
    this.animalService.getAnimalById(this.id)
      .then(animal => {
        this.dogsLoading = false
        this.animal = animal
        console.log(this.animal)
     })
  }


  navigateTo (id: number) {
    this.router.navigate([`/animal/${id}`]);
  }

  edit (id: number) {
    
    this.router.navigate([`/animal/put/${id}`]);
    this.animalService.putAnimal(this.animalService.getAnimalById(id),id).then(()=>{
      console.log("PUT-PUT");
    })
  }

  delete (id: number,event) {
    event.stopPropagation()
    console.log(event)
    this.animalService.deleteAnimal(id).then(()=>{
      console.log("SIKERES TORLES")
      this.loadAnimals()
    })
   
    
  }

}
