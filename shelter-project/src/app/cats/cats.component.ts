// import { Component, OnInit } from '@angular/core';
// import { catservice } from '../services/animal.service';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cats',
//   templateUrl: './cats.component.html',
//   styleUrls: ['./cats.component.css']
// })
// export class CatsComponent implements OnInit {

//   public isAdmin=true
//   private cats
//   public catsLoading = true

//   constructor(
//     private auth:AuthService,
//     private router: Router,
//     private catservice: catservice
//   ) { }

//   ngOnInit() {
//     this.catservice.getCats()
//     .then(cats=>{
//       this.catsLoading=false;
//       this.cats=cats;
//     })
//     // this.isAdmin=this.auth.user.role=="ROLE_ADMIN";
//   }
//   edit (id: number) {
    
//     this.router.navigate([`/animal/put/${id}`]);
//     this.catservice.putAnimal(this.catservice.getAnimalById(id),id).then(()=>{
//       console.log("PUT-PUT");
//     })
//   }
//   delete (id: number) {
//     this.catservice.deleteAnimal(id).then(()=>{
//       console.log("SIKERES TORLES")
//       this.router.navigate(['/animal'])
//     })

// }

import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  public isAdmin=true

  private cats
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
  public catsLoading = true
  public typeIsTranslated=false;

  id=null;

  constructor (
    private animalService: AnimalService,
    private router: Router,
    private auth:AuthService
  ) {}

  ngOnInit() {
    this.loadAnimals()
    this.isAdmin=this.auth.user.role=="ROLE_ADMIN";
  }

  getAnimalByID(id:number){
    this.animalService.getAnimalById(this.id)
      .then(animal => {
        this.catsLoading = false
        this.animal = animal
        console.log(this.animal)
     })
  }


  navigateTo (id: number) {
    this.router.navigate([`/animal/${id}`]);
  }
    //????????????????????????????????????????????????????

  edit (id: number) {
    
    this.router.navigate([`/animal/put/${id}`]);
    this.animalService.putAnimal(this.animalService.getAnimalById(id),id).then(()=>{
      console.log("PUT-PUT");
    })
  }
  loadAnimals () {
    this.catsLoading=true;
    this.animalService.getCats()
    .then(cats=>{
      this.catsLoading=false;
      this.cats=cats;
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

