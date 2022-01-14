import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getUniversitiesList(name: string) {
    return this.http.get(`http://universities.hipolabs.com/search?country=${name}`);
    console.log("API Called");

  }
}

// get(url: string){

// }
// CRUD Functionality :- ( GET, CREATE, UPDATE, DELETE)
// GET: To GET data
// PUT: To UPDATE data
// POST: To CREATE data
// DELETE: To DELETE data

// lohoast:8080/api/getById/123  - GET -query params

// lohoast:8080/api/getData/123/tom/tom@gmail.com
// lohoast:8080/api/getData?id=123&name=tom&email=tom@gmail.com - string params

