import { Component, OnInit, Input } from '@angular/core';
import { Day } from 'src/app/modules/day';
import {Degree} from 'src/app/modules/degree'

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.css']
})
export class WeekDayComponent implements OnInit {

  @Input() day:Day;
  @Input() celsius:boolean;
  constructor() { }

  ngOnInit() {
  }

}
