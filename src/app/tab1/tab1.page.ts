import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavigationExtras, Router } from '@angular/router';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { DatafirebaseService,Dataf } from '../services/datafirebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dormdatas: any[] = [];


  public ingredients = [];

private dormdata: Observable<Dataf[]>;
currentImage: any;
MyProjectRef: any;
MyProjectURL: any;

  constructor(
    private router:Router,
    public navCtrl: NavController,
    private datafirebaseService: DatafirebaseService
    ) {
    this.MyProjectRef = firebase.storage().ref('/images/')
   } 

   ngOnInit() {
    this.dormdata = this.datafirebaseService.getDorms();
  
    // this.storage.get('introShown').then((result) => {
    //   if(result == null){
    //     this.storage.set('introShown',true);
    //     this.navCtrl.goRoot('/intro');
    //   }
    // });
    
    // console.log("data : ", this.datas) 
  }   

  // ionViewDidEnter() {
//   this.dataService.getDorms().subscribe((dormdatas: any[]) => {
//     this.dormdatas = dormdatas;
    
//   });
// }

  // openData(namedorm){
  //   // console.log('openData', dormId); // /main/detail-restaurant/{{restaurant._id}}
  //   // this.navCtrl.navigateForward('/content1/${dormId');
  // }

  
  //  openData(namedorm){
  //    let navigationExtras: NavigationExtras ={
  //      state: {
  //        names: namedorm
  //      }
  //    };
  //    console.log("namedorm" ,namedorm)
  //    console.log("Extras" ,navigationExtras)
  //   this.router.navigate(['/content1'],navigationExtras);
  // }
  
  
  // openData(){
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(this.data)
  //     }
  //   };
  //   this.router.navigate(['content1'], navigationExtras);
  // }
  
  
  
  //  openData(){
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(this.data)
  
  //     }
  //   }
  //   this.router.navigate(['cardsdata'],navigationExtras);
  // }


}
