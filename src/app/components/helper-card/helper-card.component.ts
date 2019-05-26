import { Component, OnInit, Input } from "@angular/core";
import { UserProfile } from "src/app/types/user.model";
import { UserProfileService } from "src/app/services/user-profile/user-profile.service";
import { Router } from "@angular/router";
import { TaskService } from "src/app/services/task/task.service";
import { Task } from "src/app/types/task.model";
import { AuthService } from "src/app/services/auth/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-helper-card",
  templateUrl: "./helper-card.component.html",
  styleUrls: ["./helper-card.component.less"]
})
export class HelperCardComponent implements OnInit {
  @Input() helperId: string;
  @Input() task: Task;
  @Input() closedTasks;

  helper: UserProfile;

  constructor(
    private userService: UserProfileService,
    private router: Router,
    private taskService: TaskService,
    public authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userService
      .getUserById(this.helperId)
      .subscribe((helper: UserProfile) => {
        this.helper = helper;
        console.log("helper", helper);
      });
  }

  openProfile() {
    this.router.navigate([`helper/profile/${this.helper.id}`]);
  }

  removeFromTask() {
    delete this.task.helperId;
    this.openSnackBar("Волонтер снят с задачи");
    this.taskService.updateTask(this.task).subscribe();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 2000
    });
  }
}
