import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { DatafirebaseService } from '../services/datafirebase.service';
import { ActivatedRoute } from '@angular/router';

declare var google;

@Component({
  selector: 'app-content1',
  templateUrl: './content1.page.html',
  styleUrls: ['./content1.page.scss'],
})
export class Content1Page  implements OnInit {

  dormdata = ""
 
  constructor(private route: ActivatedRoute, private router: Route,
    private datafirebaseService: DatafirebaseService,
    public navCtrl: NavController,) {  


    // this.route.queryParams.subscribe(params => {
    //   if (params && params.special) {
    //     this.data = JSON.parse(params.special);
    //     //  this.showData();
    //   }
    // });
  }

  // ionViewWillEnters() {
  //   this.datafirebaseService.load().subscribe((data: any) => {
  //     const dormdataId = this.route.snapshot.paramMap.get('dormdataId');
  //     if (data && data.speakers) {
  //       for (const dormdata of data.dormdatas) {
  //         if (dormdata && dormdata.id === dormdataId) {
  //           this.dormdata = dormdata;
  //           break;
  //         }
  //       }
  //     }
  //   });
  // }
   //   this.route.quryParams.subscribe(params => {
  //     if (this.route.getCurrentNavigation().extras.state) {
  //     console.log("5555", this.getCurrentNavigation().extras.state.names)
  //     this.data = this.route.getCurrentNavigation().extras.state.names;
  //     console.log("name", this.data)
  //     this.showData();
  //     }
  //   })
  //   this.route.routerReuseStratrgy.shouldReuseRouter = function(){
  //     return false;
  //   }
  //  }

  ngOnInit() {
//   }
// }
//     this.route.quryParams.subscribe(params => {
//       if (this.route.getCurrentNavigation().extras.state) {
//       console.log("5555", this.getCurrentNavigation().extras.state.names)
//       this.data = this.route.getCurrentNavigation().extras.state.names;
//       console.log("name", this.data)
//       this.showData();
//       }
//     })
//     this.route.routerReuseStratrgy.shouldReuseRouter = function(){
//       return false;
    }
    // ionViewWillEnter() {
    //   this.loadMap();
    // }
  }

   
  // ngOnInit() {
  // }

  // showData() {
  //   this.datadormService.getData(this.data).then(data=> {
  //     console.log("data",data) ; 
  //   this.data = data; console.log("ssssss",this.data) }
    
  // }
// }
