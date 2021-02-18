import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClan } from '../clan-detail/clan';

@Injectable({
    providedIn: 'root'
})
export class CoCApiService {
    private apiUrl = 'assets/api-clan.php';

    //Uncomment to use data from .Net C# API
    //apiUrl = 'https://localhost:5001/api/values/%238L000CQ8';       

    constructor(private http: HttpClient) { }

    public getClan(): Observable<IClan> {
        return this.http.get<IClan>(this.apiUrl);
    }
}