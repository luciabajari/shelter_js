import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public isAdmin=true
  private animals
  private animal={
    id:null,
    name:'',
    animalType:'',
    createDate:'',
    status:'',
    breed:'',
    age:null,
    description:"",
    getOnWellWithDOGS:false,
    getOnWellWithCATS:false,
    getOnWellWithKIDS:false

  }
  public animalsLoading = true
  public typeIsTranslated=false;

  id=null;
  

  constructor (
    private animalService: AnimalService,
    private router: Router,
    private auth:AuthService
  ) {}
  loadAnimals () {
    this.animalsLoading=true;
    this.animalService.getAnimals()
    .then(animals=>{
      this.animalsLoading=false;
      this.animals=animals;
      console.log(this.animals)
    })
  }

  ngOnInit() {
    this.loadAnimals()
    // this.isAdmin=this.auth.user.role=="ROLE_ADMIN";
  }

  getAnimalByID(id:number){
    this.animalService.getAnimalById(id)
      .then(animal => {
        this.animalsLoading = false
        this.animal = animal
        console.log(this.animal)
     })
  }


  navigateTo (id: number) {
    this.router.navigate([`/animal/${id}`]);
  }
 
  delete (id: number) {
    event.stopPropagation()
    console.log(event)
    this.animalService.deleteAnimal(id).then(()=>{
      console.log("SIKERES TORLES")
      this.loadAnimals()
    })
    //Serviceből a delete meghívása, majd navigálás: this.router.navigate([`/animal`]);
    
  }
}
