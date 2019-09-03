import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

const data: Entry[] = [
  { date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
  { date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
  { date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
];

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HoursComponent {
  dataSource = data;
  columnsToDisplay = ['date', 'location', 'hours', 'star'];
  expandedElement: Entry | null;
  print() {
    console.log('hello');
  }
}

export interface Entry {
  date: string;
  hours: number;
  location: string;
  students: string;
  description: string;
}
