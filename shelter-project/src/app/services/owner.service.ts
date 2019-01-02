import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {

  private ownerlUrl = 'http://localhost:3000/owner';

  constructor(
    private http: HttpClient
  ) { }

  public getOwners() {
    return this.http.get<any>(`${this.ownerlUrl}/`, httpOptions).toPromise();
  }

  public getOwnerById(id:number) {
    return this.http.get<any>(`${this.ownerlUrl}/${id}`, httpOptions).toPromise();
  }

  public putOwner (owner,id:number) {
    return this.http.put(`${this.ownerlUrl}/${id}`, owner, httpOptions).toPromise();
  }
  public deleteOwner (id:number) {
    return this.http.delete(`${this.ownerlUrl}/${id}`, httpOptions).toPromise();
  }

  public postOwner (owner) {
    return this.http.post(`${this.ownerlUrl}/`, owner).toPromise();
  }
}