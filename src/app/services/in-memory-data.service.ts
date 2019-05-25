import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { UserProfile, UserRole } from '../types/user.model';
import { Category } from '../types/categories.model';
import { Task } from '../types/task.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: UserProfile[] = [
      {
        id: '1',
        name: 'Иван',
        secondName: 'Иванов',
        lastName: 'Иванович',
        phone: '89000000000',
        role: UserRole.ADMIN
      },
      {
        id: '2',
        name: 'Дмитрий',
        secondName: 'Пурис',
        lastName: 'Николаевич',
        phone: '89157191250',
        role: UserRole.HELPER
      },
      {
        id: '3',
        name: 'Антон',
        secondName: 'Варламов',
        lastName: 'Дмитриевич',
        phone: '89040078219',
        role: UserRole.HELPER
      },
      {
        id: '4',
        name: 'Валентина',
        secondName: 'Медведева',
        lastName: 'Олеговна',
        phone: '89041585858',
        role: UserRole.OLDER,
        birthday: '1956-06-13T21:00:00.000Z',
        address: 'г.Тверь, Спортивный переулок, 12'
      }
    ];
    // const tasks
    const categories: Category[] = [
      { id: '1', title: 'Убраться дома' },
      { id: '2', title: 'Купить продукты' },
      { id: '3', title: 'Помыть окна' },
      { id: '4', title: 'Помочь дойти' },
      { id: '5', title: 'Помочь по дому' },
      { id: '6', title: 'Выехать на дачу' },
      { id: '7', title: 'Другое' }
    ];

    const tasks: Task[] = [
      {
        id: '1',
        description: 'Помочь доехать до дачи в Черногубово',
        categoryId: '6',
        olderId: '4',
        dateStart: '2019-06-12T21:00:00.000Z',
        repeatable: false,
        timeMinutes: 0,
        timeHours: 8,
      },
      {
        id: '2',
        description: 'Помыть окна',
        categoryId: '3',
        olderId: '4',
        helperId: '2',
        dateStart: '2019-04-29T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: true,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false
        },
        timeMinutes: 30,
        timeHours: 10,
      },
      {
        id: '3',
        description: 'Помочь убраться в доме',
        categoryId: '1',
        olderId: '4',
        helperId: '2',
        dateStart: '2019-05-25T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: true,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: true,
          Saturday: false,
          Sunday: true
        },
        timeMinutes: 30,
        timeHours: 10,
      }
    ];

    return { users, categories, tasks };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: any): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 1;
  }
}