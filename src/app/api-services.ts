import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http: HttpClient) {}
  getmovies() {
    return this.http.get('https://fooapi.com/api/movies');
  }
  
}
