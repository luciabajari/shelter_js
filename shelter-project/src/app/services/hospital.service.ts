import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class HospitalService {

  private hospitalUrl = 'http://localhost:3000/hospital';

  constructor(
    private http: HttpClient
  ) { }

  public getHospitals() {
    return this.http.get<any>(`${this.hospitalUrl}/`, httpOptions).toPromise();
  }

  public getHospitalById(id:number) {
    return this.http.get<any>(`${this.hospitalUrl}/${id}`, httpOptions).toPromise();
  }
}