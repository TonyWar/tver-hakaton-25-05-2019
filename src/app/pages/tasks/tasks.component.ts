import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  tasks = [];
  constructor(
    public tasksService: TaskService
  ) { }

  ngOnInit() {
    this.tasksService.getFreeTasks()
      .subscribe(tasks => {
        console.log('free tasks', tasks);
        this.tasks = tasks;
      })
  }

}
