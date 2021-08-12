import { Component, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @FormatDate
export class AppComponent {
  title = 'Assignment10';
  CurrentDate:any=new Date();
}
