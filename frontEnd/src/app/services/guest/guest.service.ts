import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = 'http://localhost:8000/api/guests/';

  constructor(private http: HttpClient) { }

  getGuests(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGuest(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id + '/');
  }

  createGuest(guestData: any): Observable<any> {
    return this.http.post(this.apiUrl, guestData);
  }

  updateGuest(guest: any): Observable<any> {
    return this.http.put(this.apiUrl + guest.id + '/', guest);
  }

  deleteGuest(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id + '/');
  }
}