import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getUniversitiesList() {
    return this.http.get("http://universities.hipolabs.com/search");
    console.log("API Called");

  }
}

// get(url: string){

//}
// CRUD Functionality :- ( GET, CREATE, UPDATE, DELETE)
// GET: To GET data
// PUT: To UPDATE data
// POST: To CREATE data
// DELETE: To DELETE data
