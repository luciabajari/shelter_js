import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
export class AnimalService {

  private animalUrl = 'http://localhost:3000/animal';

  constructor(
    private http: HttpClient
  ) { }

  public getAnimals() {
    return this.http.get<any>(`${this.animalUrl}/`).toPromise();
  }
  public getCats() {
    return this.http.get<any>(`${this.animalUrl}/cats`, httpOptions).toPromise();
  }
  public getDogs() {
    return this.http.get<any>(`${this.animalUrl}/dogs`, httpOptions).toPromise();
  }

  public getAnimalById(id:number) {
    return this.http.get<any>(`${this.animalUrl}/${id}`, httpOptions).toPromise();
  }

  public postAnimal (animal) {
    return this.http.post(`${this.animalUrl}/`, animal, httpOptions).toPromise();
  }
  public deleteAnimal (id:number) {
    return this.http.delete(`${this.animalUrl}/${id}`, httpOptions).toPromise();
  }

  //????????????????????????????????????????????????????
  public putAnimal (animal,id:number) {
    return this.http.put(`${this.animalUrl}/${id}`, animal, httpOptions).toPromise();
  }
}