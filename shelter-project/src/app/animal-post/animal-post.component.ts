import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';
// import moment from 'moment';

@Component({
  selector: 'app-animal-post',
  templateUrl: './animal-post.component.html',
  styleUrls: ['./animal-post.component.css']
})
export class AnimalPostComponent implements OnInit {

  public saved=false;

  name='';
  animalType='';
  createDate='';
  status='';
  breed='';
  age=null;
  description="";
  getOnWellWithDOGS=false;
  getOnWellWithCATS=false;
  getOnWellWithKIDS=false;

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveDatas(){
    console.log("Név: "+this.name);
    console.log("animalType: "+this.animalType);
    console.log("status: "+this.status);
    console.log("description: "+ this.description);
    if(this.name=='' || this.animalType==''){
      confirm("Nem maradhat kitöltetlen mező!");
    }else{
      this.saved=true;
      console.log({
        name: this.name,
        animalType: this.animalType,
        createDate:this.createDate,
        status:this.status,
        breed:this.breed,
        age:this.age,
        description:this.description,
        getOnWellWithDOGS: this.getOnWellWithDOGS,
        getOnWellWithCATS: this.getOnWellWithCATS,
        getOnWellWithKIDS: this.getOnWellWithKIDS
      })
      this.animalService.postAnimal({
        name: this.name,
        animalType: this.animalType,
        createDate:this.createDate,
        status:this.status,
        breed:this.breed,
        age:this.age,
        description:this.description,
        getOnWellWithDOGS: this.getOnWellWithDOGS,
        getOnWellWithCATS: this.getOnWellWithCATS,
        getOnWellWithKIDS: this.getOnWellWithKIDS
      }).then(() => {
        this.router.navigate(['/animal'])
      })
    }
    
  }

}
