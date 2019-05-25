import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { UserProfile } from 'src/app/types/user.model';
import { Task } from 'src/app/types/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.less']
})
export class HelperComponent implements OnInit {
  helper: UserProfile;
  tasks: Task[];
  
  constructor(
    private route: ActivatedRoute,
    private readonly userService: UserProfileService,
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.helperId) {
        this.userService.getUserById(params.helperId)
        .subscribe((helper: UserProfile) => this.helper = helper)

        this.taskService.getHelperTasks(params.helperId)
        .subscribe((tasks: Task[]) => this.tasks = tasks)
      }
    })
  }

}
