import { Component, OnInit } from "@angular/core";
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/types/task.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { UserProfile } from 'src/app/types/user.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: "app-older",
  templateUrl: "./older.component.html",
  styleUrls: ["./older.component.less"]
})
export class OlderComponent implements OnInit {
  tasks: Task[];
  user: UserProfile;

  constructor(
    private taskService: TaskService,
    private userService: UserProfileService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params) => {
        if (params.olderId) {
          return this.taskService.getOlderTasks(params.olderId);
        }

        return of(undefined);
      })
    ).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log('task', tasks);
    })

    this.route.params.pipe(
      switchMap((params) => {
        if (params.olderId) {
          return this.userService.getUserById(params.olderId);
        }

        return of(undefined);
      })
    ).subscribe((user: UserProfile) => {
      this.user = user;
      console.log('user', user);
    })
  }
}
