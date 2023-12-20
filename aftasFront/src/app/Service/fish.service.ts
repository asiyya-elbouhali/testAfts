import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from '../Model/fish';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private apiUrl = 'http://localhost:8000/fish';  

  constructor(private http: HttpClient) { }

  fetchFish(): Observable<Fish[]> {
    return this.http.get<Fish[]>(`${this.apiUrl}`);
  }

  createFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(`${this.apiUrl}/create`, fish);
  }

  getFishByName(name: string): Observable<Fish> {
    return this.http.get<Fish>(`${this.apiUrl}/${name}`);
  }

  updateFish(name: string, updatedFish: Fish): Observable<Fish> {
    return this.http.put<Fish>(`${this.apiUrl}/update/${name}`, updatedFish);
  }

  deleteFish(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${name}`);
  }} 
