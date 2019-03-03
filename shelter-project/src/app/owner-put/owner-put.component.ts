import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-put',
  templateUrl: './owner-put.component.html',
  styleUrls: ['./owner-put.component.css']
})
export class OwnerPutComponent implements OnInit {
  private name;
  private email;
  private password;
  private phoneNumber;
  private address;
  private role;
  private id;
  private sub;

  public ownersLoading = true
  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id

      this.ownerService.getOwnerById(this.id)
        .then(owner => {
          this.name = owner.name
          this.email = owner.email
          this.password = owner.password
          this.phoneNumber = owner.phone_number
          this.address = owner.address
          this.role = owner.role
          console.log("STATUS: ", this.role, typeof this.role);
        })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  edit () {
    this.ownerService.putOwner({
      name : this.name,
      email : this.email,
      password : this.password,
      phoneNumber : this.phoneNumber,
      address : this.address,
      role : this.role
    }, this.id).then(()=>{
      console.log("PUT-PUT");
      this.router.navigate(['/owner'])
    })
  }

}
