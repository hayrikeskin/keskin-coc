import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClan } from '../clan-detail/clan';

@Injectable({
    providedIn: 'root'
})
export class CoCApiService {
    private apiUrl = 'assets/api-clan.php?clan=#';
    
    //Uncomment to use data from .Net C# API
    //private apiUrl = 'https://localhost:5001/api/values/%23';

    //Uncomment to use data from Java API
    //private apiUrl = 'http://localhost:8080/CocJavaAPI/clans/%23';

    constructor(private http: HttpClient) { }

    public getClan(tag: string): Observable<IClan> {
        return this.http.get<IClan>(this.apiUrl + tag);
    }
}