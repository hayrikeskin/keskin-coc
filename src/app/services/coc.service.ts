import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
 
import { IClan } from '../clan-detail/clan';

@Injectable({
  providedIn: 'root'
})
export class CoCService {
  //private hostUrl = '/v1';
  private hostUrl = 'https://api.clashofclans.com/v1';

  private headers =  { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA1OGM3MjU3LWJjZWMtNDAxNi1hNjIxLThhOWQyNDViNTBjOSIsImlhdCI6MTYxMzIwMDkzNywic3ViIjoiZGV2ZWxvcGVyL2QxNGExY2IxLWZlYmEtMDM5OC03NWU2LWZkNGVjMjcwMzhkMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgyLjE3My4zOS4yNDgiXSwidHlwZSI6ImNsaWVudCJ9XX0.CUlevIlUQEPWtpZoZbT3lI5oqk9uxMI4tVGW5XyCyIN2yDw2Y4YWE0AgEg3hyuy1-4CEJEKWXivMhY3DNlUx-Q' };

  constructor(private http: HttpClient) { }
  
  getClanFromId(_id: string): Observable<IClan> {
    return this.http.get<IClan>(this.hostUrl + '/clans/' + _id, { headers: this.headers })
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
