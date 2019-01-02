import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HotelService {

  private hotelUrl = 'http://localhost:3000/hotel';

  constructor(
    private http: HttpClient
  ) { }

  public getHotel() {
    return this.http.get<any>(`${this.hotelUrl}/`).toPromise();
  }

}