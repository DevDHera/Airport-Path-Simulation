import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { AirportService } from '../../services/airport.service';
import { Airport } from '../../models/Airport';
import { Marker } from '../../models/Marker';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  airports: Airport[];
  markers: Marker[];

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2
    };

    this.airportService.getAirports().subscribe(airports => {
      this.airports = airports;
      this.markers = this.airports.map(({ id, name, iata, position, ...rest }) => Object.assign({
        lat: position.lat,
        lng: position.lng,
        label: name
      }));
      this.dtTrigger.next();
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
