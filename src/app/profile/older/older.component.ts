import { Component, OnInit } from "@angular/core";
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/types/task.model';

@Component({
  selector: "app-older",
  templateUrl: "./older.component.html",
  styleUrls: ["./older.component.less"]
})
export class OlderComponent implements OnInit {
  olderId: string = '4';
  name = "Valentina";
  surname = "Stepanovna";
  subtitle = "Donskogo 37 dom 2";
  description =
    "Hello I am Valentina Stepanovna. Here you need add some  information";

  tasks: Task[];
  
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getOlderTasks(this.olderId)
    .subscribe((tasks: Task[]) => this.tasks = tasks)
  }
}
