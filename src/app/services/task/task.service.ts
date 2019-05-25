import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from 'src/app/types/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from 'src/app/types/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'api/tasks';
  public task?: Task;

  constructor(
    private http: HttpClient,
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getOlderTasks(olderId: string) {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        map(tasks => tasks
          .filter(task => task.olderId === olderId)
        )
      )
  }

  // getHelperTasks()
  getFreeTasks() {
    return this.getTasks()
      .pipe(
        tap(tasks => {
          console.log(tasks, tasks.filter(task => !task.helperId))
        }),
        map(tasks => tasks.filter(task => !task.helperId))
      );
  }
}
