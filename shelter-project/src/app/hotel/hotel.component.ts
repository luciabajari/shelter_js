import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  private hotel
  public hotelLoading = true
  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.hotelService.getHotel()
    .then(hotel=>{
      this.hotelLoading=false;
      this.hotel=hotel;
      console.log(this.hotel);
    })
  }

}
