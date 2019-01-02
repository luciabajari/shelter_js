import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-by-id',
  templateUrl: './owner-by-id.component.html',
  styleUrls: ['./owner-by-id.component.css']
})
export class OwnerByIdComponent implements OnInit {

  private owner
  private id
  private sub
  public ownerLoading = true
  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id

      this.ownerService.getOwnerById(this.id)
        .then(owner => {
          this.ownerLoading = false
          this.owner = owner
          console.log(this.id)
      }) 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
