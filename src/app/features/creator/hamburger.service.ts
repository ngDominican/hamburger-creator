import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hamburger } from 'src/app/shared/models/hamburger.model';

const HAMBURGERS_RESOURCE = '/hamburgers';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {

  constructor(private http: HttpClient) {}

  hamburgers$ = this.http.get<Hamburger[]>(`${environment.API}${HAMBURGERS_RESOURCE}`);

  save = (data: Hamburger) => {
    return this.http.post<Hamburger>(`${environment.API}${HAMBURGERS_RESOURCE}`, data);
  }

}
