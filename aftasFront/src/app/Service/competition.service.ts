import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../Model/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }
    private url: String = "http://localhost:8000/";
    
    GetCompetition(page : number):Observable<any>{
        return this.http.get(`${this.url}competition/${page}`);
    }
    InsertCompetition(comp : Competition):Observable<any>{
        return this.http.post(`${this.url}competition`,comp);
    }
  
}
