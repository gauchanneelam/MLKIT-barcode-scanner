import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {RouterExtensions} from 'nativescript-angular/router'



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./qr-details.component.html",
    styleUrls: ["qr-details.component.css"]

})
export class QrDetailsComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        console.log("hello this is qr-details");
        
    }
      back(){
          this.router.navigate(['/items'],{
              transition:{
                  name:'slide'
              }
          })
      }
}
