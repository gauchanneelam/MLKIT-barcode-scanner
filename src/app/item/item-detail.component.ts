import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {RouterExtensions} from 'nativescript-angular/router'
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MLKitBarcodeScanner", () => require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);



@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["item-detail.component.css"]

})
export class ItemDetailComponent implements OnInit {

pause: boolean = false;
barcodes;
    constructor(
        private route: ActivatedRoute,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        // this.pause = false;
    }
    onBarcodeScanningResult(event: any): void {
        console.log("event value 99", event );
        this.barcodes = event.value.barcodes;

        if(this.barcodes.length > 0){
            // this.pause = true;
            this.back();
            // this.router.navigate(['/items'],{
            //     transition:{
            //         name:"slide"
            //     }
            // })
        }
      }
      back(){
          this.router.back();
      }
}
