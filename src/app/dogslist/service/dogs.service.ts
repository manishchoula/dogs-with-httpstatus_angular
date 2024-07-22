import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  public baseUrl = 'https://http.dog';
  constructor(private http: HttpClient) { }

  getDogByStatusCode(statusCode: string): Observable<any> {
    const url = `${this.baseUrl}/${statusCode}.jpg`;
    console.log(url);

    // return this.http.get(url);
    return of({
      title: `Status Code ${statusCode}`,
      status_code: statusCode,
      image: {
        // jpg: `${this.baseUrl}/${statusCode}.jpg`
        jpg: url,
        json: `${this.baseUrl}/${statusCode}.json`,
      }
    });
  }
}
