import { Injectable } from '@angular/core';
import { Entry } from './models/entry';
import { of, Observable } from 'rxjs';
import { Student } from './models/student';

const data: Entry[] = [
  { id: '1', date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
  { id: '2', date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
  { id: '3', date: '3-3-4', hours: 10, location: 'wea ridge', students: 'hannah', description: 'some stuff' },
];

const student: Student[] = [
  { id: 1, name: 'andy', hours: 10},
  { id: 2, name: 'andy', hours: 10},
];

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor() { }

  public getStudents(): Observable<Student[]> {
    return of(student);
  }

  public getHours(): Observable<Entry[]> {
    return of(data);
  }

  public getEntry(id: string): Observable<Entry> {
    return of(data.find(elm => elm.id === id));
  }

}
