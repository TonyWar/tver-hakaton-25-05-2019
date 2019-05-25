import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {

  categories = [
    'Убраться дома',
    'Купить продукты',
    'Помыть окна',
    'Помочь дойти',
    'Помочь по дому',
    'Выехать на дачу',
    'Другое'
  ]

  public taskForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    old: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
  });
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.taskForm.valueChanges.subscribe((respose) => console.log(respose))
  }

  submit() {
    console.log(this.taskForm.value.method)
  }

}
