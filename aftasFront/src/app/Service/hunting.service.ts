import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hunting } from '../Model/hunting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {
  
  constructor(private http:HttpClient) { }
  private url: String = "http://localhost:8000/";

  addHunting(hunting : Hunting){
    return this.http.post(`${this.url}hunting`,hunting);
  }

  fetchHuntings(code: string): Observable<any> {
    console.log("wanaaaaaaaaaa");
    
    console.log(code);

     const queryParams = { code };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<any>(`${this.url}hunting/huntings`, { headers, params: queryParams });
  }

}
