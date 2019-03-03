import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public isAdmin=true
  private owners
  public ownersLoading = true

  
  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.loadUsers()
    this.isAdmin=this.auth.user.role=="ROLE_ADMIN";
  }

  navigateTo (id: number) {
    this.router.navigate([`/owner/${id}`]);
  }


  loadUsers () {
    this.ownersLoading=true;
    this.ownerService.getOwners()
    .then(owners=>{
      this.ownersLoading=false;
      this.owners=owners;
    })
  }

  delete (id: number, event) {
    if (confirm('Biztos törölni szeretné?')) {
    event.stopPropagation()
    console.log(event)
    this.ownerService.deleteOwner(id).then(()=>{
      console.log("SIKERES TORLES")
      this.loadUsers()
    })
  }else{
    this.loadUsers()
  }
}

  
}