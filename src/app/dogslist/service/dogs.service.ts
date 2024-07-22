// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DogsService {

//   constructor() { }
// }
// dog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  public baseUrl = 'https://http.dog';
//https://http.dog/404.json
  constructor(private http: HttpClient) {}

  // getDogByStatusCode(statusCode: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${statusCode}.jpg`);
  // }
  getDogByStatusCode(statusCode: string): Observable<any> {
    const url = `${this.baseUrl}/${statusCode}.jpg`;
    console.log(url);
    
    // return this.http.get(url);
    return of({
      title: `Status Code ${statusCode}`,
      status_code: statusCode,
      image: {
        // jpg: `${this.baseUrl}/${statusCode}.jpg`
        jpg:url,
        json:`${this.baseUrl}/${statusCode}.json`,
      }
    });
    // const jsonUrl = `${this.baseUrl}/${statusCode}.json`;

    // return this.http.get(jsonUrl).pipe(
    //   map((data: any) => {
    //     return {
    //       status: 200,
    //       url: `${this.baseUrl}/${statusCode}.jpg`,
    //       json: jsonUrl,
    //       data: data,
    //       // console.log(data),
          
    //     };
    //   }),
    //   catchError(error => of(null)) // Return null if the JSON API is not available
    // );
  }


  getAllDogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
