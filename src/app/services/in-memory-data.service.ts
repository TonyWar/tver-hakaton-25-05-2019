import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { UserProfile, UserRole } from '../types/user.model';

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
    return { users };
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