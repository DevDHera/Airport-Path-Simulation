import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Airport } from '../models/Airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  airportsCollection: AngularFirestoreCollection<Airport>;
  airportDoc: AngularFirestoreDocument<Airport>;
  airports: Observable<Airport[]>;
  airport: Observable<Airport>;

  constructor(private afs: AngularFirestore) {
    this.airportsCollection = afs.collection('airports', ref => ref.orderBy('name', 'asc'));
  }

  getAirports(): Observable<Airport[]> {
    this.airports = this.airportsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Airport;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    return this.airports;
  }
}
