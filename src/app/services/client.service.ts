import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  urlAddress = 'https://api.nbp.pl/api/cenyzlota?format=json'

  constructor(private http: HttpClient) {  }

  public getData(): Observable<RootDataItem[]> {
    return this.http.get<RootDataItem[]>(this.urlAddress);
  }
}

export interface RootDataItem {
  data: string;
  cena: number;
};


