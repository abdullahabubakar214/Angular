import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = '/api/BusBooking/';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'GetBusLocations');
  }

  searchBus(from: number, to: number, travelDate: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`
    );
  }

  getBusScehduleById(id: number) {
    return this.http.get<any[]>(this.apiUrl + 'GetBusScheduleById?id=+id');
  }

  getBookedSeats(id: number) {
    return this.http.get<any[]>(this.apiUrl + 'getBookedSeats?shceduleId=+id');
  }

  
}
