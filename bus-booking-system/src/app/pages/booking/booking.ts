import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/masterService';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {
  scehduleId: number = 0;
  scehduleData: any;
  seatArray: number[] = [];
  bookedSeatsArray: number[] = [];
  userSelectedSeatArray: number[] = [];

  //By using activated route we can read the route data
  constructor(private activateRoute: ActivatedRoute, private masterSrv: MasterService) {
    this.activateRoute.params.subscribe((res: any) => {
      this.scehduleId = res.id;
      this.getScehduleDetailById();
      this.getBookedSeatsById();
    });
  }

  getScehduleDetailById() {
    this.masterSrv.getBusScehduleById(this.scehduleId).subscribe((res: any) => {
      debugger;
      this.scehduleData = res;
      for (let index = 1; index <= this.scehduleData.totalSeats; index++) {
        this.seatArray.push(index);
      }
    });
  }

  getBookedSeatsById() {
    this.masterSrv.getBookedSeats(this.scehduleId).subscribe((res: any) => {
      debugger;
      this.bookedSeatsArray = res;
    });
  }

  checkIfSeatBooked(seatNo: number) {
    return this.bookedSeatsArray.indexOf(seatNo);
  }

  selectSeat(seatNo: number) {
    this.userSelectedSeatArray.indexOf(seatNo);
  }

  checkIsSeatSelected(seatNo: number) {
    return this.userSelectedSeatArray.indexOf(seatNo);
  }
}
