import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClan } from '../clan-detail/clan';

@Injectable({
    providedIn: 'root'
})
export class FileService {
    private fileLocation = './assets/cocdata.json';

    constructor(private http: HttpClient) { }

    public getClan(): Observable<IClan> {
        return this.http.get<IClan>(this.fileLocation);
    }
}