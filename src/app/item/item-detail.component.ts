import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
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
export class ItemDetailComponent implements OnInit,OnDestroy {

pause: boolean = false;
barcodes;
    constructor(
        private route: ActivatedRoute,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        // this.pause = false;
    }
    @HostListener('unloaded')
    ngOnDestroy(){
        console.log("component destroyed");
        
    }

    onBarcodeScanningResult(event: any): void {
        console.log("event value 99", event );
        this.barcodes = event.value.barcodes;

        if(this.barcodes.length > 0){
            // this.pause = true;
            // this.back();
            this.router.navigate(['/qrdetails'],{
                transition:{
                    name:"slide"
                }
            })
        }
      }
      back(){
          this.router.back();
      }
}
