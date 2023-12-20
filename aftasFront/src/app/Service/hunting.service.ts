import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hunting } from '../Model/hunting';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  
  constructor(private http:HttpClient) { }
  private url: String = "http://localhost:8000/";

  addHunting(hunting : Hunting){
    return this.http.post(`${this.url}hunting`,hunting);
  }



}
