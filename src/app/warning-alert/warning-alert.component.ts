import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: "<p>WARNING!</p>",
  styles: [
    `
      p {
        padding: 1rem;
        background-color: #fc3;
        border: 2px solid #fa3;
      }
    `,
  ],
})
export class WarningAlertComponent {}
