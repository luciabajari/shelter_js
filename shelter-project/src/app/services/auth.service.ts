import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user = null;
  redirectUrl: string;
  private usersUrl = 'http://localhost:3000/owner';

    loginObservable = new BehaviorSubject<any>(undefined);

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<any>(
        `${this.usersUrl}/login`,
        {

        },
        httpOptions
      ).toPromise();
      this.user = user;
      console.log(this.user)
      this.loginObservable.next(this.user)
      return Promise.resolve(true);
    } catch (e) {
      console.log('hiba', e);
      return Promise.resolve(false);
    }
  }
    
  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.user = null;
    this.loginObservable.next(this.user)
  }

  isLoggedIn() {
    return this.user != null;
  }


}