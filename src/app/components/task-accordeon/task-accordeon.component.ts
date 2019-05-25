import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/types/task.model';

@Component({
  selector: 'app-task-accordeon',
  templateUrl: './task-accordeon.component.html',
  styleUrls: ['./task-accordeon.component.less']
})
export class TaskAccordeonComponent implements OnInit {
  @Input() tasks: Task[];
  repeatDays: boolean[];

  constructor() { }

  ngOnInit() {
  }

  consoleLog() {
    console.log(this.tasks)
  }

}
