import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { TaskService } from "src/app/services/task/task.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/types/categories.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.less"]
})
export class AddTaskComponent implements OnInit {
  categories: Category[];

  repeatDays = [
    { name: "Понедельник", selected: false, id: 0 },
    { name: "Вторник", selected: false, id: 1 },
    { name: "Среда", selected: false, id: 2 },
    { name: "Четверг", selected: false, id: 3 },
    { name: "Пятница", selected: false, id: 4 },
    { name: "Суббота", selected: false, id: 5 },
    { name: "Воскресенье", selected: false, id: 6 }
  ];

  olderId: string;

  public taskForm = this.fb.group({
    // name: new FormControl(''),
    description: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    method: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    endDate: new FormControl(""),
    time: new FormControl("", [Validators.required])
  });

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private categoryService: CategoriesService,
  ) {}

  ngOnInit() {
    this.taskForm.valueChanges.subscribe(respose => console.log(respose));
    this.route.params.subscribe(params => (this.olderId = params.olderId));
    this.categoryService.getCategories()
    .subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log(categories);
    })
  }

  updateDays(i) {
    this.repeatDays[i].selected = !this.repeatDays[i].selected;
    // console.log(this.repeatDays)
  }

  submit() {
    if (this.taskForm.valid) {
      this.addTask();
    } else {
      this.openSnackBar('Неверно заполнена информация', 'Закрыть')
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private addTask() {
    let task: any = {
      description: this.taskForm.value.description,
      categoryId: this.categories.find(
        item => item === this.taskForm.value.category
      ),
      olderId: this.olderId,
      dateStart: this.taskForm.value.date,
      repeatable: this.taskForm.value.method === "repeat",
      timeMinutes: this.taskForm.value.time.minute,
      timeHours: this.taskForm.value.time.hour
    };
    if (this.taskForm.value.dateEnd) {
      task = { ...task, dateEnd: this.taskForm.value.dateEnd };
    }
    if (this.taskForm.value.method === "repeat") {
      task = {
        ...task,
        repeatDays: {
          Monday: this.repeatDays[0].selected,
          Tuesday: this.repeatDays[1].selected,
          Wednesday: this.repeatDays[2].selected,
          Thursday: this.repeatDays[3].selected,
          Friday: this.repeatDays[4].selected,
          Saturday: this.repeatDays[5].selected,
          Sunday: this.repeatDays[6].selected
        }
      };
    }
    this.taskService
      .addTask(task)
      .subscribe(res =>
        this.router.navigate([`older/profile/${this.olderId}`])
      );
  }
}
