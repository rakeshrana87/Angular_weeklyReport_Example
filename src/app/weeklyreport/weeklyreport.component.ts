import { Component, OnInit } from '@angular/core';
import {   NgForm } from '@angular/forms';
import { IWeek } from '../shared/interfaces';

@Component({
    selector: 'app-weeklyreport',
    templateUrl: './weeklyreport.component.html'
})
export class WeeklyReportComponent implements OnInit {

  week: IWeek =
    {
      teamName: '',
      name: '',
      message: '',

    };
  constructor() {
  }

  ngOnInit() {

  }

  submit() {
  console.log("Message: " + this.week.message + "TeamName: "  + this.week.teamName + "name: " + this.week.name);

  }
}
