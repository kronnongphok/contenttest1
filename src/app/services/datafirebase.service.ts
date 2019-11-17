
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Dataf {
  
  //dorm
  id?: string;
  namedorm: string;
  addres: string;
  img: string;
  review: string;
  datadorm:string;
  price: string;
  
  //contact
  telcont: string;
  contact: string;

  //map 
  zone: string;
  lat: string;
  long: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class DatafirebaseService {

  private dormdata: Observable<Dataf[]>;
  private dataCollection: AngularFirestoreCollection<Dataf>;
 
  constructor(private afs: AngularFirestore) {
    this.dataCollection = this.afs.collection<Dataf>('dormdata');
    this.dormdata = this.dataCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getDorms(): Observable<Dataf[]> {
    return this.dormdata;
  }
 
  getDorm(id: string): Observable<Dataf> {
    return this.dataCollection.doc<Dataf>(id).valueChanges().pipe(
      take(1),
      map(dataf => {
        dataf.id = id;
        return dataf
      })
    );
  }


}