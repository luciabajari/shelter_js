import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-post',
  templateUrl: './owner-post.component.html',
  styleUrls: ['./owner-post.component.css']
})
export class OwnerPostComponent implements OnInit {
  public saved=false;


  name='';
  password='';
  email='';
  phoneNumber=null;
  address=''
  role='';


  constructor(
    private ownerService: OwnerService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("kkk")
  }

  saveDatas(){
    console.log("Név: "+this.name);
    console.log("PW: "+this.password);
    console.log("email: "+this.email);
    console.log("phoneNumber: "+ this.phoneNumber);
    if(this.name=='' || this.password==''){
      confirm("Nem maradhat kitöltetlen mező!");
    }else{
      this.saved=true;
      console.log({
        name: this.name,
        password: this.password,
        email:this.email,
        phoneNumber:this.phoneNumber,
        address:this.address,
        role:this.role,
        
      })
      this.ownerService.postOwner({
        name: this.name,
        password: this.password,
        email:this.email,
        phoneNumber:this.phoneNumber,
        address:this.address,
        role:this.role,
      }).then(() => {
        this.router.navigate(['/owner'])
      })
    }
    
  }

}
