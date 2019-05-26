import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { UserProfile, UserRole } from '../types/user.model';
import { Category } from '../types/categories.model';
import { Task } from '../types/task.model';
import { Notifications } from '../types/notifications.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: UserProfile[] = [
      {
        id: '1',
        name: 'Администратор',
        secondName: 'Администратов',
        lastName: 'Администратович',
        phone: '89000000000',
        role: UserRole.ADMIN
      },
      {
        id: '2',
        name: 'Дмитрий',
        secondName: 'Пурис',
        lastName: 'Николаевич',
        phone: '89157191250',
        categoryIds: ['1', '3', '6'],
        role: UserRole.HELPER
      },
      {
        id: '3',
        name: 'Антон',
        secondName: 'Варламов',
        lastName: 'Дмитриевич',
        phone: '89040078219',
        categoryIds: ['7'],
        role: UserRole.HELPER
      },
      {
        id: '10',
        name: 'Борис',
        secondName: 'Николаев',
        lastName: 'Дмитриевич',
        phone: '89040088219',
        categoryIds: ['2', '4'],
        role: UserRole.HELPER
      },
      {
        id: '11',
        name: 'Захар',
        secondName: 'Стрелков',
        lastName: 'Иванович',
        phone: '89040098219',
        categoryIds: ['3', '4'],
        role: UserRole.HELPER
      },
      {
        id: '12',
        name: 'Артём',
        secondName: 'Меркушев',
        lastName: 'Донатович',
        phone: '89040098219',
        categoryIds: ['2', '5'],
        role: UserRole.HELPER
      },
      {
        id: '4',
        name: 'Ольга',
        secondName: 'Сканави',
        lastName: 'Михайловна',
        phone: '89041585858',
        role: UserRole.OLDER,
        birthday: '1956-06-13T21:00:00.000Z',
        address: 'г.Тверь, ул. Фрунзе, 12',
        avatar: '/assets/old_5.jpg'
      },
      {
        id: '5',
        name: 'Ибрагим',
        secondName: 'Гусейнов',
        lastName: 'Нагиевич',
        phone: '89041234521',
        role: UserRole.OLDER,
        birthday: '1945-03-17T21:00:00.000Z',
        address: 'г.Тверь, Хромова, 19',
        avatar: '/assets/old_4.jpg'
      },
      {
        id: '6',
        name: 'Игорь',
        secondName: 'Карлов',
        lastName: 'Сергеевич',
        phone: '89041434523',
        role: UserRole.OLDER,
        birthday: '1953-11-10T21:00:00.000Z',
        address: 'г.Тверь, Горького, 25',
        avatar: '/assets/old_3.jpg'
      },
      {
        id: '7',
        name: 'Петр',
        secondName: 'Коновалов',
        lastName: 'Даниилович',
        phone: '89041534523',
        role: UserRole.OLDER,
        birthday: '1955-11-10T21:00:00.000Z',
        address: 'г.Тверь, пл. Мира, 25',
        avatar: '/assets/old_2.jpg'
      },
      {
        id: '8',
        name: 'Иван',
        secondName: 'Исаев',
        lastName: 'Дамирович',
        phone: '89041634523',
        role: UserRole.OLDER,
        birthday: '1952-09-10T21:00:00.000Z',
        address: 'г.Тверь, ул. Артюхиной, 25',
        avatar: '/assets/old_1.jpg'
      },

    ];
    // const tasks
    const categories: Category[] = [
      { id: '1', title: 'Уборка' },
      { id: '2', title: 'Покупки' },
      { id: '3', title: 'Стирка' },
      { id: '4', title: 'Сопровождение' },
      { id: '5', title: 'Ремонт' },
      { id: '6', title: 'Поездка' },
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
      },
      {
        id: '4',
        description: 'Отремонтировать дверь',
        categoryId: '5',
        olderId: '5',
        helperId: '3',
        dateStart: '2019-05-25T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: false,
          Tuesday: true,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: true,
          Sunday: false
        },
        timeMinutes: 45,
        timeHours: 19,
      },
      {
        id: '5',
        description: 'Полить цветы',
        categoryId: '7',
        olderId: '5',
        helperId: '3',
        dateStart: '2019-05-25T21:00:00.000Z',
        repeatable: false,
        repeatDays: {
          Monday: false,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false
        },
        timeMinutes: 10,
        timeHours: 16,
      },
      {
        id: '6',
        description: 'Сопроводить до банка',
        categoryId: '4',
        olderId: '6',
        dateStart: '2019-05-25T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: false,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false
        },
        timeMinutes: 0,
        timeHours: 18,
      },
      {
        id: '7',
        description: 'Посидеть с внуком',
        categoryId: '7',
        olderId: '6',
        dateStart: '2019-05-30T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: true,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: false,
          Saturday: true,
          Sunday: false
        },
        timeMinutes: 10,
        timeHours: 15,
      },
      {
        id: '8',
        description: 'Помочь с покупкой овощей',
        categoryId: '2',
        olderId: '6',
        dateStart: '2019-05-30T21:00:00.000Z',
        repeatable: true,
        repeatDays: {
          Monday: false,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false
        },
        timeMinutes: 14,
        timeHours: 15,
      }
    ];

    const notifications: Notifications[] = [
      {
        id: '1',
        message: 'Вам было добавлено новое задание, зайдите в профиль',
        userId: '2'
      },
      {
        id: '2',
        message: 'Волонтёр выполнил поручение. Перейдите по ссылке для просмотра информации.',
        userId: '1'
      },
      {
        id: '3',
        message: 'Волонтёр принял новое задание.',
        userId: '1'
      }
    ];

    return { users, categories, tasks, notifications };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: any): string {
    return users.length > 0 ? (Math.max(...users.map(hero => hero.id)) + 1) + '' : '1';
  }
}