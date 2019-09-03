import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Entry } from '../models/entry';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HoursService } from '../hours.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  subscriptionList: Subscription = new Subscription();

  entry: Observable<Entry>;

  hours: number;
  location: string;
  students: string;
  description: string;

  constructor(private route: ActivatedRoute, private hoursService: HoursService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptionList.add(
      this.hoursService.getEntry(id).subscribe(data => {
        this.hours = data.hours;
        this.location = data.location;
        this.students = data.students;
        this.description = data.description;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptionList.unsubscribe();
  }

}
