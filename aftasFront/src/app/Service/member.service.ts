import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../Model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  private url: String = "http://localhost:8000/";
    
    GetMembers(code : String,page : number):Observable<any>{
        return this.http.get(`${this.url}member/${code}/${page}`);
    }
    InsertMember(mem : Member):Observable<any>{
        return this.http.post(`${this.url}member`,mem);
    }

    GetFish():Observable<any>{
      return this.http.get(`${this.url}fish`);
    }


}
