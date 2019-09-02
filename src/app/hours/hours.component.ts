import { Component, OnInit } from '@angular/core';

export interface Entry {
  date: string;
  hours: number;
  location: string;
}

const HOURS: Entry[] = [
  {date:'8-1-22', hours:10, location:'Wea Ridge'},
];

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  
  displayedColumns: string[] = ['date', 'location', 'hours',];
  dataSource = HOURS;
  student: {
    name: string,
    hours: number,
    email: string
  };

  constructor() { }

  ngOnInit() {
  }

}