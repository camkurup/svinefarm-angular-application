import { Injectable } from '@angular/core';
import { Light } from '../Interfaces/light';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightService {
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  
  //Connection string to the API that has the connection to the DB
  //The string might differ on another local setup
  baseUrl:string = "https://localhost:7085/Light";
  constructor(private http:HttpClient) { }

  GetAllLightLogs():Observable<Light[]>{
    return this.http.get<Light[]>(this.baseUrl);
  }
}
