import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/types/task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserProfile } from 'src/app/types/user.model';

@Component({
  selector: 'app-task-accordeon',
  templateUrl: './task-accordeon.component.html',
  styleUrls: ['./task-accordeon.component.less']
})
export class TaskAccordeonComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() tasksChange = new EventEmitter<Task[]>();
  repeatDays: boolean[];
  myProfile: UserProfile;

  constructor(
    private taskService: TaskService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userAuthData$
    .subscribe((myProfile: UserProfile) => this.myProfile = myProfile)
  }

  consoleLog() {
    console.log(this.tasks)
  }

  getTask(task: Task) {
    const updatedTask = { ...task, helperId: this.myProfile.id}
    console.log('updatedTask', updatedTask)
    this.taskService.updateTask(updatedTask)
      .subscribe(res => {
        let newTasks = [];
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        newTasks = [...this.tasks];
        newTasks[index] = updatedTask;
        this.tasksChange.emit(newTasks);
      });
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }

  cancelTask(id: string) {

    this.taskService.cancelTask(id)
    .subscribe(res => {
      let newTasks = [];
      const index = this.tasks.findIndex(task => task.id === id);
      newTasks = [ ...this.tasks.slice(0, index), ...this.tasks.slice(index + 1)]
      console.log('newTasks', newTasks)
      this.tasksChange.emit(newTasks);
    });
  }
}
