import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IElasticClan } from '../clan-detail/clan';
 
@Injectable({
  providedIn: 'root'
})
export class CoCElasticService {
  private requestUrl = 'http://localhost:9200/coc/clans/1/';

  constructor(private http: HttpClient) { }
  
  public getClan(): Observable<IElasticClan> {
    return this.http.get<IElasticClan>(this.requestUrl);
  }
}
