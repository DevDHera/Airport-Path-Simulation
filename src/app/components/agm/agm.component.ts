import { Component, OnInit, Input } from '@angular/core';

import { Marker } from '../../models/Marker'

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() markers: Marker[];
  // lat = 51.678418;
  // lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
