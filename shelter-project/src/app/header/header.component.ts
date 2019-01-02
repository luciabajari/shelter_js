import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  loggedIn = false

  ngOnInit() {
    this.auth.loginObservable.subscribe(user => {
      console.log(user)
      this.loggedIn = !!user
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigate([''])
    
  }
}
