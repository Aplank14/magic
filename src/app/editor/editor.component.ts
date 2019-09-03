import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  hours: number;
  location: string;
  students: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
