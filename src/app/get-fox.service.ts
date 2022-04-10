import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetFoxService {

  apiUrl = "https://randomfox.ca/floof/";

  constructor(private http : HttpClient) { }

  getFox(){
    return this.http.get<any>(this.apiUrl);
  }

}
