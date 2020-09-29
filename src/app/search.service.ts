import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }

  load() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getUserInfo(id : any){
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }
}
