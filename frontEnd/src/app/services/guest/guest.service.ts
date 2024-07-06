import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getGuests(): Observable<any> {
    return this.http.get(this.apiUrl + 'guests/');
  }

  getGuest(id: number): Observable<any> {
    return this.http.get(this.apiUrl + 'guests/' + id + '/');
  }

  createGuest(guestData: any) {
    const url = 'http://localhost:8000/api/guests/';
    return this.http.post(url, guestData, { withCredentials: true });
}

  updateGuest(guest: any): Observable<any> {
    return this.http.put(this.apiUrl + 'guests/' + guest.id + '/', guest);
  }

  deleteGuest(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'guests/' + id + '/');
  }
}