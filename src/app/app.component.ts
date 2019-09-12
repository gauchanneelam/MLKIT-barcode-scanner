import { Component } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    ngOnInit() {
        firebase.init({
          // Optionally pass in properties for database, authentication and cloud messaging,
          // see their respective docs.
        }).then(
          () => {
            console.log("firebase.init done");
          },
          error => {
            console.log(`firebase.init error: ${error}`);
          }
        );
      }
}
