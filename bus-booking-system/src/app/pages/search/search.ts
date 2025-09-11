import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/masterService';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, FormsModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  location$: Observable<any[]> = new Observable<any[]>();
  masterSrv = inject(MasterService);

  busList: any[] = []; ///we hold the data of buslist

  // this object is bind to HTML element
  searchObj: any = {
    fromLocation: '',
    toLocation: '',
    travelDate: '',
  };

  //on page Load OnInit call automatically
  ngOnInit(): void {
    this.getAllLocation();
  }

  getAllLocation() {
    this.location$ = this.masterSrv.getLocations();
  }

  onSearch() {
    const { fromLocation, toLocation, travelDate } = this.searchObj;
    this.masterSrv.searchBus(fromLocation, toLocation, travelDate).subscribe((res: any) => {
      this.busList = res;

      if (this.busList.length == 0) {
        alert(
          'Please Use Swagger to add Travels Schecule for this Location onthis date. on Nagpur to Pune on 18-08-24 data is available'
        );
      }
    });
  }
}
