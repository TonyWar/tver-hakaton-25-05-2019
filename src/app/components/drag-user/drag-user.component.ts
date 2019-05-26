import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/types/task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { concat, merge, forkJoin } from 'rxjs';

@Component({
  selector: 'app-drag-user',
  templateUrl: './drag-user.component.html',
  styleUrls: ['./drag-user.component.less']
})
export class DragUserComponent implements OnInit {
  users: UserProfile[];
  currentUser: UserProfile[] = [];
  mode?: 'older' | 'task';
  someId?: string;
  olderData?: UserProfile;
  taskData?: Task;

  constructor(
    private userService: UserProfileService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.getHelperUsers()
      .subscribe((users: UserProfile[]) => {
        this.users = users;
      });

    this.route.params.subscribe(params => {
      if (params.olderId) {
        this.mode = 'older';
        // this.olderData
        this.userService.getUserById(params.olderId)
          .subscribe(user => {
            this.olderData = user;
          });
      }
      if (params.taskId) {
        this.mode = 'task';
        this.taskService.getTasks()
          .pipe(
            map(items => items.find(task => task.id === params.taskId))
          )
          .subscribe(task => {
            this.taskData = task;
          });
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length) {
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          0,
          event.previousIndex
        );
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex + 1,
          event.currentIndex
        );
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }

    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    // return item.data % 2 === 0;
    return true;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    // return false;
    return true;
  }

  submit() {
    if (this.mode === 'older') { this.olderSubmit(); }
    if (this.mode === 'task') { this.taskSubmit(); }
  }

  olderSubmit() {
    this.userService.updateUser({ ...this.olderData, helperId: this.currentUser[0].id })
      .subscribe(res => {
        this.taskService.getTasks()
          .pipe(
            map(tasks => tasks.filter(task => task.olderId === this.olderData.id)),
            switchMap(tasks => forkJoin(
              ...tasks.map(task => this.taskService.updateTask({ ...task, helperId: this.currentUser[0].id }))
            ))
          ).subscribe(res => {
            console.log('new requests', res);
            window.history.back();
          });
      });
  }
  taskSubmit = () => {
    this.taskService.updateTask({ ...this.taskData, helperId: this.currentUser[0].id })
      .subscribe(res => {
        window.history.back();
      });
  }
}
