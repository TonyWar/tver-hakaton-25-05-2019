import { Component, OnInit } from "@angular/core";
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/types/task.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { UserProfile, UserRole } from 'src/app/types/user.model';

@Component({
  selector: "app-older",
  templateUrl: "./older.component.html",
  styleUrls: ["./older.component.less"]
})
export class OlderComponent implements OnInit {
  olderId: string = '4';

  tasks: Task[];
  user: UserProfile;

  constructor(
    private taskService: TaskService,
    private userService: UserProfileService
    ) {}

  ngOnInit() {
    this.taskService.getOlderTasks(this.olderId)
    .subscribe((tasks: Task[]) => this.tasks = tasks)

    this.userService.getUserById(this.olderId)
    .subscribe((user: UserProfile) => this.user = user)
  }
}
