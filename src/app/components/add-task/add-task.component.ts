import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

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

  repeatDays =  [
    { name: 'Понедельник',  selected: false, id: 0 },
    { name: 'Вторник',  selected: false, id: 1 },
    { name: 'Среда',  selected: false, id: 2 },
    { name: 'Четверг',  selected: false, id: 3 },
    { name: 'Пятница',  selected: false, id: 4 },
    { name: 'Суббота',  selected: false, id: 5 },
    { name: 'Воскресенье',  selected: false, id: 6 },
  ]

  public taskForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    old: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required])
  });

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.taskForm.valueChanges.subscribe((respose) => console.log(respose))
  }

  updateDays(i) {
    this.repeatDays[i].selected = !this.repeatDays[i].selected;
    // console.log(this.repeatDays)
  }

  submit() {
    console.log(this.taskForm.value.method)
  }

}
