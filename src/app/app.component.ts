import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Date Command';
  date = new Date();
  dateString = toLocaleString(this.date);
  enterFlag = false;

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
      if (!this.enterFlag) {
        this.dateString = toLocaleString(this.date);
      }
    }, 1000);
  }

  mouseEnter() {
    this.enterFlag = true;
  }

  mouseLeave() {
    this.enterFlag = false;
  }
}
function toLocaleString( date ) {
  return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    ].join( '/' ) + ' '
    + date.toLocaleTimeString();
}
