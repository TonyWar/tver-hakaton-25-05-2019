import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/types/task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserProfile } from 'src/app/types/user.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/types/categories.model';

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
  loadingNewHelper: boolean = false;
  categories: Category[] = [];

  constructor(
    private taskService: TaskService,
    public authService: AuthService,
    private categoryService: CategoriesService
  ) { }

  ngOnInit() {
    this.authService.userAuthData$
    .subscribe((myProfile: UserProfile) => this.myProfile = myProfile)

    this.categoryService.getCategories()
    .subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

  getCategory(id) {
    return this.categories.find(category => id === category.id).title;
  }

  getTime(task: Task): string {
    let hours = task.timeHours + '';
    let minutes = task.timeMinutes + '';

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`
  }

  getTask(task: Task) {
    this.loadingNewHelper = true;
    const updatedTask = { ...task, helperId: this.myProfile.id}
    console.log('updatedTask', updatedTask)
    this.taskService.updateTask(updatedTask)
      .subscribe(res => {
        let newTasks = [];
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        newTasks = [...this.tasks];
        newTasks[index] = updatedTask;
        this.tasksChange.emit(newTasks);
        this.loadingNewHelper = false;
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
